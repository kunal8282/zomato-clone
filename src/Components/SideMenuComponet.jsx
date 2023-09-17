const SideMenuComponet = ({data}) => {
  return (
    <div className="w-3/12 ">
        <ul>
          {
            data.map(element => <li className="p-2 text-lg font-semibold" key={element.key}>
                <a href={`/${element.id}`}>{element?.title}</a>
          </li>)
          }
        </ul>
      </div>
  )
}

export default SideMenuComponet