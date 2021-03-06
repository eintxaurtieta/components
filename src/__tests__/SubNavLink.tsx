import React from 'react'
import {SubNav} from '..'
import {COMMON} from '../constants'
import {render, behavesAsComponent} from '../utils/testing'
import {render as HTMLRender, cleanup} from '@testing-library/react'
import {axe, toHaveNoViolations} from 'jest-axe'
import 'babel-polyfill'
expect.extend(toHaveNoViolations)

describe('SubNav.Link', () => {
  behavesAsComponent(SubNav.Link, [COMMON])

  it('renders an <a> by default', () => {
    expect(render(<SubNav.Link />).type).toEqual('a')
  })

  it('should have no axe violations', async () => {
    const {container} = HTMLRender(<SubNav.Link />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
    cleanup()
  })

  it('respects the "selected" prop', () => {
    expect(render(<SubNav.Link selected />)).toMatchSnapshot()
  })

  it('adds activeClassName={SELECTED_CLASS} when it gets a "to" prop', () => {
    const Link = ({theme, ...props}: any) => <div {...props} />
    expect(render(<SubNav.Link as={Link} to="#" />)).toMatchSnapshot()
  })
})
