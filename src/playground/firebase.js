// database.ref('expenses').push({
//   description: 'Rent',
//   amount: 280000,
//   note: 'January rent',
//   createdAt: 0
// })


// database.ref('notes').push({
//   title: 'To Do',
//   body: 'Go for a run'
// })
// const notes = [{
//   id: '12',
//   title: 'First note!',
//   body: 'This is my note'
// }, {
//   id: '13',
//   title: 'Second note!',
//   body: 'This is my note'
// }]
//
// database.ref('notes').set(notes)
// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val()
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })
//
//
// setTimeout(() => {
//   database.ref()
//     .update({
//       'job/title': 'Staff Software Developer',
//     })
// }, 5000)

// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })
//
// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = []
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expenses)
// })
//
// setTimeout(() => {
//   database.ref('expenses').push({
//     description: 'Bucks',
//     amount: 325,
//     note: '',
//     createdAt: 876243598672345
//   })
// }, 10000)

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log(expenses)
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e)
//   })

// database.ref().set({
//   name: 'Todd Seller',
//   age: 48,
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Half Moon Bay',
//     state: 'California',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved')
// }).catch((e) => {
//   console.log('This failed.', e)
// })
//
// database.ref()
//   .update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle',
//     'location/state': 'Washington'
//   })
//   .then(() => {
//     console.log('Data has been updated')
//   })
//   .catch((e) => {
//     console.log('Update has failed', e)
//   })

// database.ref('isSingle')
//   .remove()
//   .then(() =>{
//     console.log('isSingle has been removed')
//   })
//   .catch((e) => {
//     console.log('Remove failed', e)
//   })
