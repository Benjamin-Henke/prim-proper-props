function GuestList() {
    return (
        <>
            <h2>Guest List</h2>
        </>
    ) // end return
} // end GuestList

export default GuestList;



{/*
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Kid's Meal</th>
          </tr>
        </thead>
        <tbody>
          {guestList.map(guest => (
            <tr key={guest.id}>
              <td>{guest.name}</td>
              <td>{String(guest.kidsMeal)}</td>
            </tr>
          ))}
        </tbody>
      </table> */}