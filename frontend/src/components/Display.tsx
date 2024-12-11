// import { useSearchParams } from "react-router-dom";

// function Display() {
//   const [searchParams] = useSearchParams();
//   const data = searchParams.get("data");

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Scanned Content</h1>
//       {data ? (
//         <table border="1" style={{ margin: "0 auto", width: "50%", textAlign: "left" }}>
//           <thead>
//             <tr>
//               <th>Key</th>
//               <th>Value</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Object.entries(JSON.parse(data)).map(([key, value], index) => (
//               <tr key={index}>
//                 <td>{key}</td>
//                 <td>{value}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No data found</p>
//       )}
//     </div>
//   );
// }

// export default Display;
