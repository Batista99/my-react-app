import * as React from "react"
import { Link } from "gatsby"

import Seo from "../components/seo"

const IndexPage = () => (
  <div>
    <h1>Learn to design and code React apps</h1>
    <p>Complete courses about the best tools and design systems. Protototype and build apps with React and Swift.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
