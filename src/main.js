import Card from './card'

function Main({data, isLoading, error}){
  return(
    <div className="body">
      {
        isLoading ? <div className="loader"></div>:
        data.map(e=>(
          <Card user={e}/>
        ))
      }
    </div>
  )
}

export default Main;
