import './index.css'

const TabItem = props => {
  const {tabDetail, tabInfo} = props
  const {tabId, displayText} = tabDetail
  const ram = () => {
    tabInfo(tabId)
  }

  return (
    <div>
      <button type="button" className="k1" onClick={ram}>
        {displayText}
      </button>
    </div>
  )
}
export default TabItem
