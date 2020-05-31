import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import ApiPage from "../../components/ApiPage"
import apiV5 from "../../data/en/api-v5"
import api from "../../data/en/api"

const Api = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => (
  <Layout location={location} defaultLang="en">
    <Seo title={apiV5.title} location={location} />
    <ApiPage defaultLang="en" api={api} />
  </Layout>
)

export default Api
