import Absence from 'src/features/employee/absence/componets/DataGrid'

export default function Employees() {

  // const {data , loading } = useGetAllUsers()
  const  data = {

    "success": true,
    "message": "success",
    "data":
        [
        {
          'id':1,
          'first_name':'muhammad',
          'last_name':'alzabibi',
          'justified':5,
          'unjustified':6,
          'total':11,
        },
        {
          'id':2,
          'first_name':'abood',
          'last_name':'aaa',
          'justified':2,
          'unjustified':15,
          'total':17,
        },
      ]
    }

  return (
    <>
    {data ? <Absence rows = {data}/>:null}
    </>
  )

}
