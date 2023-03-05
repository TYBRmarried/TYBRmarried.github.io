// import React from "react";
// import "../css/CoupleInfo.css";
// import Accordion from "./Accordion";
// import { Row, Col } from "react-bootstrap";

// const contactInfos = [
//     { spouseGender: "신랑", name: "이태용", img: "", phone: "010-6774-8959" },
//     { spouseGender: "신부", name: "김보라", img: "", phone: "010-6774-8959" },
//     { spouseGender: "신랑 父", name: "이헌국", img: "", phone: "010-6774-8959" },
//     { spouseGender: "신부 父", name: "김완영", img: "", phone: "010-6774-8959" },
//     { spouseGender: "신랑 母", name: "윤일순", img: "", phone: "010-6774-8959" },
//     { spouseGender: "신부 母", name: "최미란", img: "", phone: "010-6774-8959" },
// ];

// // const contactInfos = [
// //     ["신랑", "이태용", "010-6774-8959"],
// //     ["신랑", "이태용", "010-6774-8959"],
// //     ["신랑", "이태용", "010-6774-8959"],
// //     ["신랑", "이태용", "010-6774-8959"],
// //     ["신랑", "이태용", "010-6774-8959"],
// //     ["신랑", "이태용", "010-6774-8959"],
// // ]

// const accountInfos = [
//     { spouseGender: "신랑", name: "이태용", img: "", account: "국민 399101-04-235738" },
//     { spouseGender: "신부", name: "김보라", img: "", account: "국민 399101-04-235738" },
//     { spouseGender: "신랑 父", name: "이헌국", img: "", account: "국민 399101-04-235738" },
//     { spouseGender: "신부 父", name: "김완영", img: "", account: "국민 399101-04-235738" },
//     { spouseGender: "신랑 母", name: "윤일순", img: "", account: "국민 399101-04-235738" },
//     { spouseGender: "신부 母", name: "최미란", img: "", account: "국민 399101-04-235738" },
// ];

// const CoupleInfo = () => {
//     const createContactInfo = (index) => {
//         return (
//             <Row>
//                 <Col className="col-6">
//                     <Row>
//                         <Col className="col-4 d-flex">
//                             <div className="img"></div>
//                         </Col>
//                         <Col className="col-8">
//                             <Row>
//                                 <Col>
//                                     {contactInfos[index].spouseGender} {contactInfos[index].name}
//                                 </Col>
//                             </Row>
//                             <Row>
//                                 <Col>
//                                     {contactInfos[index].phone}
//                                 </Col>
//                             </Row>
//                         </Col>
//                     </Row>
//                 </Col>
//                 <Col className="col-6">
//                     <Row>
//                         <Col className="col-4 d-flex">
//                             <div className="img"></div>
//                         </Col>
//                         <Col className="col-8">
//                             <Row>
//                                 <Col>
//                                     {contactInfos[index + 1].spouseGender} {contactInfos[index + 1].name}
//                                 </Col>
//                             </Row>
//                             <Row>
//                                 <Col>
//                                     {contactInfos[index + 1].phone}
//                                 </Col>
//                             </Row>
//                         </Col>
//                     </Row>
//                 </Col>
//             </Row>
//         );
//     };

//     const createAccordionContentInContact = () => {
//         return (
//             [createContactInfo(0), createContactInfo(2), createContactInfo(4)]
//         );
//     };

//     const createAccountInfo = (index) => {
//         return (
//             <Row>
//                 <Col className="col-6">
//                     <Row>
//                         {/* <Col className="col-3 d-flex">
//                             <div className="img"></div>
//                         </Col> */}
//                         <Col className="col-12">
//                             <Row>
//                                 <Col>
//                                     {accountInfos[index].spouseGender} {accountInfos[index].name}
//                                 </Col>
//                             </Row>
//                             <Row>
//                                 <Col>
//                                     {accountInfos[index].account}
//                                 </Col>
//                             </Row>
//                         </Col>
//                     </Row>
//                 </Col>
//                 <Col className="col-6">
//                     <Row>
//                         <Col className="col-4 d-flex">
//                             <div className="img"></div>
//                         </Col>
//                         <Col className="col-8">
//                             <Row>
//                                 <Col>
//                                     {accountInfos[index + 1].spouseGender} {accountInfos[index + 1].name}
//                                 </Col>
//                             </Row>
//                             <Row>
//                                 <Col>
//                                     {accountInfos[index + 1].account}
//                                 </Col>
//                             </Row>
//                         </Col>
//                     </Row>
//                 </Col>
//             </Row>
//         );
//     }

//     const createAccordionContentInAccount = () => {
//         return (
//             [createAccountInfo(0), createAccountInfo(2), createAccountInfo(4)]
//         );
//     };

//     return (
//         <div className="couple-info">
//             <Accordion
//                 className="contact"
//                 title={"연락처"}
//                 content={createAccordionContentInContact()}
//             />
//             <Accordion
//                 className="account"
//                 title={"신랑 신부에게 마음 전하기"}
//                 content={createAccordionContentInAccount()}
//             />
//         </div>
//     );
// };

// export default CoupleInfo;
