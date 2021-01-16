import React, {useState} from 'react'
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays'
import add from 'date-fns/add'

const CompletionCalculator = () => {
  const [formData, setFormData] = useState({startDate: "", daysPerWeek: 0, pointsPerDay: 0})
  const [estimated, setEstimated] = useState("")
  const [daysCount, setDaysCount] = useState(0)

  const { startDate, daysPerWeek, pointsPerDay } = formData

  const levelPoints = {
    0: 36,
    1: 91.5,
    2: 78,  
    3: 93,  
    4: 72.5,
    5: 80.5,
    6: 80
  }
  const totalProgramPoints = Object.values(levelPoints).reduce((sum, pts) => sum+= pts, 0)

  console.log(totalProgramPoints)
  
  const weeksToPoints = (points, pointsPerDay, daysPerWeek) => {
        return (points / pointsPerDay) / daysPerWeek
    }
  


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({...prevState, [name]:value}) )
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(weeksToPoints(totalProgramPoints, pointsPerDay, daysPerWeek))

    console.log("Compl Date", add(new Date(), { weeks: weeksToPoints(totalProgramPoints, pointsPerDay, daysPerWeek)}))

    setEstimated(
      add(new Date(), {weeks: weeksToPoints(totalProgramPoints, pointsPerDay, daysPerWeek)}).toLocaleDateString().toString()
    )

    setDaysCount(
      differenceInCalendarDays(new Date(), new Date(startDate)
    ))
    
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}> 
        <label>Start Date</label>
        <input onChange={handleChange} type="text" name="startDate" value={formData.startDate}/>
        <label>Days Per Week</label>
        <input onChange={handleChange} type="text" name="daysPerWeek" value={formData.daysPerWeek}/>
        <label>Points Per Day</label>
        <input onChange={handleChange} type="text" name="pointsPerDay" value={formData.pointsPerDay}/>
        <button type="submit">Calculate</button>
      </form>
      
      <h2>Days in the Program:{daysCount}</h2>
      <h3>Total Program Points: {totalProgramPoints}</h3>
      <p>Level 0: {levelPoints[0]} Points
        <strong>{pointsPerDay && add(new Date(), { weeks: weeksToPoints(levelPoints[0], pointsPerDay, daysPerWeek) }).toLocaleDateString().toString()}</strong>
      </p>
      <p>Level 1: {levelPoints[1]} Points
        <strong>{add(new Date(), {weeks: weeksToPoints(levelPoints[1], pointsPerDay, daysPerWeek)}).toLocaleDateString().toString()}</strong>
      </p>
      <p>Level 2: {levelPoints[2]}   Points
         <strong>{add(new Date(), {weeks: weeksToPoints(levelPoints[2], pointsPerDay, daysPerWeek)}).toLocaleDateString().toString()}</strong>
      </p>
      <p>Level 3: {levelPoints[3]}   Points
         <strong>{add(new Date(), {weeks: weeksToPoints(levelPoints[3], pointsPerDay, daysPerWeek)}).toLocaleDateString().toString()}</strong>
      </p>
      <p>Level 4: {levelPoints[4]} Points
         <strong>{add(new Date(), {weeks: weeksToPoints(levelPoints[4], pointsPerDay, daysPerWeek)}).toLocaleDateString().toString()}</strong>
      </p>
      <p>Level 5: {levelPoints[5]}Points
         <strong>{add(new Date(), {weeks: weeksToPoints(levelPoints[5], pointsPerDay, daysPerWeek)}).toLocaleDateString().toString()}</strong>
      </p>
      <p>Level 6: {levelPoints[6]} Points
         <strong>{add(new Date(), {weeks: weeksToPoints(levelPoints[6], pointsPerDay, daysPerWeek)}).toLocaleDateString().toString()}</strong>
      </p>

      <h2>Estimated Completion Date:{estimated}</h2>

    </div>
  )
}

export default CompletionCalculator
