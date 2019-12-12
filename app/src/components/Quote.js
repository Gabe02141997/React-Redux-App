import React,{ useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../actions/actions'


const QuoteData = props => {
 useEffect(() => {
     props.fetchData()
 }, [])

console.log(props.data)

 return(
     <div>
         <h1>Tronald Dump</h1>
         {props.data === null ? (
         <h1>Loading...

         </h1> 
         ) : (
        <div> 
         <div>       
         <p>
             Quote: {props.data.value}
        </p>
        </div>
         <p>{props.data.tags.map(person => person)}</p>
        </div>
         )
         
}
         <button onClick ={props.fetchData}>Generate Quote</button>
     </div>
 )

}

const mapStateToProps = state => (
    {
        data: state.data,
        isFetching: state.isFetching,
        error: state.error
    }
)

export default connect(mapStateToProps, { fetchData })(QuoteData)