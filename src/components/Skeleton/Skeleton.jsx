import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={271}
    height={467}
    viewBox="0 0 250 481"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >

    <rect x="41" y="68" rx="8" ry="8" width="162" height="158" />
    <rect x="53" y="241" rx="14" ry="14" width="140" height="113" />
    <rect x="56" y="409" rx="14" ry="14" width="136" height="45" />
    <rect x="209" y="40" rx="10" ry="10" width="34" height="30" />
    <rect x="98" y="390" rx="6" ry="6" width="52" height="16" />

  </ContentLoader>
)

export default Skeleton
