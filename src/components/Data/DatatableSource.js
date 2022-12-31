export const userColumns = [
  {
    field: "user",
    headerName: "User Image",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
   
    {
      field: "name",
      headerName: "name",
      width: 230,
    },
    {
      field: "role",
      headerName: "role",
      width: 100,
    },
  
     {
      field: "email",
      headerName: "email",
      width: 100,
    },
     
  ];

    export  const userRows =[
    { field: "_id", headerName: "ID", width: 250 },
    {
        field: "name",
        headerName: "name",
        width: 230,
      },
    
       {
        field: "email",
        headerName: "email",
        width: 100,
      },
  ]  


   /* export const userRows = [
    {
      id: 1,
      username: "Jon Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "jon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 2,
      username: "Jon Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "jon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 3,
      username: "Jon Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "jon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 4,
      username: "Jon Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "jon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 5,
      username: "Jon Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "jon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 6,
      username: "Jon Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "jon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 7,
      username: "Jon Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "jon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 8,
      username: "Jon Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "jon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 9,
      username: "Jon Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "jon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 10,
      username: "Jon Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "jon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
  ]; */
   
  export const hotelColumns = [
   
    {
      field: " photos",
      headerName: "Image",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.photos[0] || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
            {params.row.name}
          </div>
        );
      },
    },
      {
        field: "name",
        headerName: "Name",
        width: 150,
      },
      {
        field: "type",
        headerName: "Type",
        width: 100,
      },
      {
        field: "title",
        headerName: "Title",
        width: 230,
      },
      {
        field: "city",
        headerName: "City",
        width: 100,
      },
       
    
  ];
  
  export const roomColumns = [
 /*    { field: "_id", headerName: "ID", width: 70 }, */
    {
      field: "title",
      headerName: "Title",
      width: 230,
    },
    {
      field: "desc",
      headerName: "Description",
      width: 200,
    },
    {
      field: "price",
      headerName: "Price",
      width: 100,
    },
    
  ];