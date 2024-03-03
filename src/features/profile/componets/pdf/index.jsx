import React, { useRef, useEffect } from 'react';

const PDFGenerator = ({user,ProfileData,contentRef}) => {
  const  data = user?.data?.data?.[0]

  // useEffect(() => {
  //   // This useEffect will only run on the client side after the initial render
  //   // Code that uses window
  //   if (typeof window !== 'undefined') {
  //     import('html2pdf.js').then(html2pdfModule => {
  //       window.html2pdf = html2pdfModule.default || html2pdfModule;
  //     });
  //   }
  // }, []);

  // const generatePDF = async () => {
  //   const content = contentRef.current;

  //   if (typeof window !== 'undefined' && window.html2pdf) {
  //     const html2pdf = window.html2pdf;

  //     html2pdf(content).outputPdf().then(pdf => {
  //       const blob = new Blob([pdf], { type: 'application/pdf' });
  //       const link = document.createElement('a');
  //       link.href = window.URL.createObjectURL(blob);
  //       link.download = 'generated.pdf';
  //       link.click();
  //     });
  //   } else {
  //     console.error('abooooooooood');
  //   }
  // };

  return (
    <div style={{display:"flex",flexDirection:"column"}}>
      <div style={{ color: 'red',overflow:"hidden" }} ref={contentRef}>
      <table >
        <thead>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Address</th>
                <th>Specialization</th>
                <th>Branch ID</th>

            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{data?.id}</td>
                <td>{data?.first_name}</td>
                <td>{data?.middle_name}</td>
                <td>{data?.last_name}</td>
                <td>{data?.email}</td>
                <td>{data?.role}</td>
                <td>{data?.address}</td>
                <td>{data?.specialization}</td>
                <td>{data?.branch_id}</td>

            </tr>
        </tbody>
    </table>
      <table >
        <thead>
            <tr>
                <th>deposits</th>
                <th>received_date</th>
                <th>birth_date</th>
                <th>gender</th>
                <th>level</th>
                <th>military_situation</th>
                <th>nationalID</th>
                <th>salary</th>
                <th>social_situation</th>

            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{data?.deposits?.map((val)=>(val.description))}</td>
                <td>{data?.deposits?.map((val)=>(val.received_date))}</td>
                <td>{data?.user_info?.birth_date}</td>
                <td>{data?.user_info?.gender}</td>
                <td>{data?.user_info?.level}</td>
                <td>{data?.user_info?.military_situation}</td>
                <td>{data?.user_info?.nationalID}</td>
                <td>{data?.user_info?.salary}</td>
                <td>{data?.user_info?.social_situation}</td>

            </tr>
        </tbody>
    </table>
      <table >
        <thead>
            <tr>
                <th>careers</th>
                <th>certificates</th>
                <th>emergency</th>
                <th>languages</th>
                <th>PhoneNumber</th>
                <th>military_situation</th>
                <th>nationalID</th>
                <th>salary</th>
                <th>social_situation</th>

            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{ProfileData?.careers?.map((val)=>(val.content))}</td>
                <td>{ProfileData?.certificates?.map((val)=>(val.content))}</td>
                <td>{ProfileData?.emergency?.map((val)=>(val.email))}  || {ProfileData?.emergency?.map((val)=>(val.phone_num))}     </td>
                <td> {ProfileData?.languages?.map((val,i)=>(  <p  key={i}>{val.languages}</p>  ))}</td>
                <td>{ ProfileData?.phone_number?.map((val,i)=>( val.type="normal" ? <p key={i}> {val?.phone_num}</p> :null ))}   </td>
                <td>{data?.user_info?.military_situation}</td>
                <td>{data?.user_info?.nationalID}</td>
                <td>{data?.user_info?.salary}</td>
                <td>{data?.user_info?.social_situation}</td>

            </tr>
        </tbody>
    </table>
      </div>


    </div>
  );
};

export default PDFGenerator;
