import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Button } from 'element-react';
import 'element-theme-default';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi Tugi</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Button type="primary">Hello</Button>
  </Layout>
)

export default IndexPage
