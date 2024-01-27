import './index.css'

const AppItem = props => {
  const {eachItem} = props
  const {appName, imageUrl} = eachItem

  return (
    <div>
      <li className="con1">
        <img src={imageUrl} className="image" alt={appName} />
        <h1 className="heading">{appName}</h1>
      </li>
    </div>
  )
}
export default AppItem
