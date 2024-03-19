import { Button, Card, CardContent, MenuItem, Rating, TextField, Typography , InputAdornment} from '@mui/material'
import { Box, Stack } from '@mui/system'
import { t } from 'i18next';
import React, { useState } from 'react'
import { List, ListItem, } from '@mui/material';
import { useFieldArray, setValue, useFormContext } from 'react-hook-form';
import { useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { color } from '@mui/system';
import { useTranslation } from 'react-i18next';
import useSelectLevel from 'src/pages/employees/add/hook/useSelectLevel';
import useSelectBranch from 'src/pages/employees/add/hook/useSelectBranch';
import useSelectInput from 'src/pages/employees/add/hook/useSelectInput';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function Skills({ ShowUser,onDataChange, Controller, control, handleRatingChange, handleLanguageChange, errors }) {


  const [degree, setDegree] = useState('');
  const { t } = useTranslation()

  const [level, setLevel] = useState(ShowUser?.data?.data?.[0]?.user_info?.level||"")

  const [specialization, setSpecialization] = useState(ShowUser?.data?.data?.[0]?.specialization||"")
  const [team, setTeam] = useState(ShowUser?.data?.data?.[0]?.department?.id||"")

  const [branch , setBranch] = useState(ShowUser?.data?.data[0]?.branch_id||"")


  const { data } = useSelectInput()

   const {data:LevelData}=useSelectLevel()

  const { data: SelectBranch } = useSelectBranch()

  const handleFieldChange = (field, value) => {
    onDataChange(prevData => ({ ...prevData, [field]: value }));
  };

  const handleDegreeChange = (e) => {
    setDegree(e.target.value);
    handleFieldChange('degree', degree)
  };






  const { fields, append, remove } = useFieldArray({
    control,
    name: "educations"
  });

  const handleAddClick = () => {
    append('educations', { study: '', degree: '' });
  };

  const handleRemoveClick = (index) => {
    remove(index);
  };

  // ******************************************************************************************************************************

  const { fields: fieldsCertificate, append: certificateAppend, remove: certificateRemove } = useFieldArray({
    control,
    name: "certificates"
  });

  const handleAddClickCertificate = () => {
    certificateAppend('certificates', { content: '' });
  };


  const handleRemoveClickcertificate = (index) => {
    certificateRemove(index);
  };

  // *********************************************************************************************************************************


  const { fields: fieldsExperience, append: experienceAppend, remove: ExperienceRemove } = useFieldArray({
    control,
    name: "experiences"
  });

  const handleAddClickExperience = () => {
    experienceAppend('experiences', { content: ''});
  };


  const handleRemoveClickExperience = (index) => {
    ExperienceRemove(index);

  }

  // *********************************************************************************************************************************


  const { fields: fieldsSkills, append: skillsAppend, remove: skillsRemove } = useFieldArray({
    control,
    name: "skills"
  });

  const handleAddClickSkills = () => {
    skillsAppend('skills', { skills: '', rate: 0 });
  };


  const handleRemoveClickSkills = (index) => {
    skillsRemove(index);
  };



  // *********************************************************************************************************************************


  const { fields: fieldsLanguage, append: LanguageAppend, remove: LanguageRemove } = useFieldArray({
    control,
    name: "languages"
  });

  const handleAddClickLanguage = () => {
    LanguageAppend('languages', { languages: '', rate: 0 });
  };


  const handleRemoveClickLanguage = (index) => {
    LanguageRemove(index);
  };

  // *********************************************************************************************************************************








  const SvgStudy = `
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M9.85611 4.82535L0.856116 8.22535C0.708196 8.28399 0.603516 8.4381 0.603516 8.59724C0.603516 8.75636 0.708196 8.91046 0.856116 8.9691L1.99988 9.40035V11.5566C1.8781 11.6664 1.79988 11.8235 1.79988 12.0004C1.79988 12.3317 2.06852 12.6004 2.39988 12.6004C2.73124 12.6004 2.99988 12.3317 2.99988 12.0004C2.99988 11.8235 2.92166 11.6664 2.79988 11.5566V9.70036L4.18112 10.2254L3.99988 12.7691C3.97002 13.1871 4.23382 13.5092 4.56238 13.7754C4.89094 14.0415 5.3315 14.2732 5.86864 14.4816C6.94288 14.8984 8.39861 15.2004 9.99987 15.2004C11.6011 15.2004 13.0569 14.8984 14.1311 14.4816C14.6683 14.2732 15.1088 14.0415 15.4374 13.7754C15.7659 13.5092 16.0297 13.1871 15.9999 12.7691L15.8186 10.2254L19.1436 8.9691C19.2916 8.91046 19.3962 8.75636 19.3962 8.59724C19.3962 8.4381 19.2916 8.28399 19.1436 8.22535L10.1436 4.82535C10.0254 4.7768 9.92329 4.80609 9.85611 4.82535ZM9.99987 5.62535L17.8749 8.60035L9.99987 11.5691L2.12488 8.60035L9.99987 5.62535ZM4.96238 10.5191L9.85611 12.3691C9.94759 12.4043 10.0522 12.4043 10.1436 12.3691L15.0374 10.5191L15.1999 12.8254C15.1999 12.8254 15.1685 12.9632 14.9374 13.1504C14.7063 13.3375 14.3261 13.5507 13.8436 13.7379C12.8786 14.1123 11.501 14.4004 9.99987 14.4004C8.49873 14.4004 7.12118 14.1123 6.15612 13.7379C5.67364 13.5507 5.29346 13.3375 5.06238 13.1504C4.8313 12.9632 4.7999 12.825 4.79988 12.8254L4.96238 10.5191Z" fill="#8090A7"/>
  </svg>`;

  const SvgCertificate = `
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M6.01578 17.5452H15.6383C16.8658 17.5452 17.8633 16.5477 17.8633 15.3202C17.8633 15.1852 17.7558 15.0777 17.6208 15.0777H7.78078C7.33828 15.0827 6.95328 15.1527 6.88328 16.0902C6.84828 16.5852 6.46328 16.9927 5.99328 17.0327C5.69828 17.0577 5.39578 16.9502 5.17578 16.7427C4.97578 16.5552 4.86328 16.3127 4.86328 16.0552L4.94328 4.08516C4.94328 3.22516 4.25328 2.53516 3.40328 2.53516C2.55328 2.53516 1.86328 3.22516 1.86328 4.07516V4.86266C1.86328 4.99766 1.97078 5.10516 2.10578 5.10516H4.45078L4.37828 16.0552C4.37828 16.4502 4.54328 16.8177 4.84328 17.0977C5.13328 17.3702 5.52328 17.5252 5.91328 17.5227C5.94578 17.5377 5.97828 17.5452 6.01578 17.5452ZM17.3608 15.5627C17.2433 16.4077 16.5158 17.0602 15.6383 17.0602H6.95828C7.19078 16.8127 7.34078 16.4852 7.36828 16.1277C7.41078 15.5627 7.49328 15.5602 7.77828 15.5627H17.3608ZM4.45328 4.62016H2.34578V4.07516C2.34578 3.49266 2.81828 3.02016 3.40078 3.02016C3.98328 3.02016 4.45578 3.49266 4.45578 4.07266L4.45328 4.62016Z" fill="#8090A7" stroke="#8090A7" stroke-width="0.3"/>
  <path d="M15.9137 15.5626C16.0487 15.5626 16.1562 15.4551 16.1562 15.3201V4.35512C16.1562 3.36262 15.3488 2.55762 14.3588 2.55762H3.62625C3.49125 2.55762 3.38375 2.66512 3.38375 2.80012C3.38375 2.93512 3.49125 3.04262 3.62625 3.04262H14.3588C15.0838 3.04262 15.6713 3.63262 15.6713 4.35512V15.3201C15.6713 15.4526 15.7787 15.5626 15.9137 15.5626Z" fill="#8090A7" stroke="#8090A7" stroke-width="0.3"/>
  <path d="M7.26852 5.60805H14.7985C14.9335 5.60805 15.041 5.50055 15.041 5.36555C15.041 5.23055 14.9335 5.12305 14.7985 5.12305H7.26852C7.13352 5.12305 7.02602 5.23055 7.02602 5.36555C7.02602 5.49805 7.13602 5.60805 7.26852 5.60805Z" fill="#8090A7" stroke="#8090A7" stroke-width="0.3"/>
  <path d="M9.68102 7.9352H14.7985C14.9335 7.9352 15.041 7.8277 15.041 7.6927C15.041 7.5577 14.9335 7.4502 14.7985 7.4502H9.68102C9.54602 7.4502 9.43852 7.5577 9.43852 7.6927C9.43852 7.8277 9.54852 7.9352 9.68102 7.9352Z" fill="#8090A7" stroke="#8090A7" stroke-width="0.3"/>
  <path d="M10.8085 10.2604H14.7985C14.9335 10.2604 15.041 10.1529 15.041 10.0179C15.041 9.88289 14.9335 9.77539 14.7985 9.77539H10.8085C10.6735 9.77539 10.566 9.88289 10.566 10.0179C10.566 10.1529 10.6735 10.2604 10.8085 10.2604Z" fill="#8090A7" stroke="#8090A7" stroke-width="0.3"/>
  <path d="M11.291 12.5875H14.7985C14.9335 12.5875 15.041 12.48 15.041 12.345C15.041 12.21 14.9335 12.1025 14.7985 12.1025H11.291C11.156 12.1025 11.0485 12.21 11.0485 12.345C11.0485 12.48 11.156 12.5875 11.291 12.5875Z" fill="#8090A7" stroke="#8090A7" stroke-width="0.3"/>
  <path d="M6.25766 13.5699C6.29766 13.5699 6.33516 13.5599 6.37016 13.5424L7.33766 13.0274L8.30516 13.5424C8.38016 13.5824 8.47016 13.5799 8.54266 13.5374C8.61516 13.4924 8.66016 13.4149 8.66016 13.3299V11.2249C8.66016 11.0899 8.55266 10.9824 8.41766 10.9824C8.28266 10.9824 8.17516 11.0899 8.17516 11.2249V12.9274L7.45016 12.5424C7.38016 12.5049 7.29516 12.5049 7.22266 12.5424L6.49766 12.9274V11.2249C6.49766 11.0899 6.39016 10.9824 6.25516 10.9824C6.12016 10.9824 6.01266 11.0899 6.01266 11.2249V13.3299C6.01266 13.4149 6.05766 13.4949 6.13016 13.5374C6.17016 13.5574 6.21266 13.5699 6.25766 13.5699Z" fill="#8090A7" stroke="#8090A7" stroke-width="0.3"/>
  <path d="M7.33859 11.8853C8.35609 11.8853 9.18359 11.0578 9.18359 10.0403C9.18359 9.02281 8.35609 8.19531 7.33859 8.19531C6.32109 8.19531 5.49359 9.02281 5.49359 10.0403C5.49359 11.0578 6.32109 11.8853 7.33859 11.8853ZM7.33859 8.67781C8.08859 8.67781 8.69859 9.28781 8.69859 10.0378C8.69859 10.7878 8.08859 11.3978 7.33859 11.3978C6.58859 11.3978 5.97859 10.7878 5.97859 10.0378C5.97859 9.29031 6.58859 8.67781 7.33859 8.67781Z" fill="#8090A7" stroke="#8090A7" stroke-width="0.3"/>
</svg>
  `;

  const SvgExperience = `
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M15.6875 5.73438H12.7344V5.18835C12.734 4.86915 12.607 4.56314 12.3813 4.33743C12.1556 4.11172 11.8496 3.98475 11.5304 3.98438H8.46971C8.1505 3.98473 7.84445 4.11169 7.61872 4.3374C7.39299 4.56311 7.26601 4.86914 7.26562 5.18835V5.73438H4.3125C3.93553 5.73481 3.57412 5.88475 3.30756 6.15131C3.04101 6.41787 2.89106 6.77928 2.89062 7.15625V14.5938C2.89106 14.9707 3.04101 15.3321 3.30756 15.5987C3.57412 15.8652 3.93553 16.0152 4.3125 16.0156H15.6875C16.0645 16.0152 16.4259 15.8652 16.6924 15.5987C16.959 15.3321 17.1089 14.9707 17.1094 14.5938V7.15625C17.1089 6.77928 16.959 6.41787 16.6924 6.15131C16.4259 5.88475 16.0645 5.73481 15.6875 5.73438ZM7.92188 5.18835C7.92205 5.04312 7.97983 4.90389 8.08253 4.8012C8.18524 4.69852 8.32448 4.64077 8.46971 4.64062H11.5304C11.6756 4.64077 11.8148 4.69853 11.9175 4.80122C12.0202 4.9039 12.078 5.04313 12.0781 5.18835V5.73438H7.92188V5.18835ZM16.4531 14.5938C16.4529 14.7967 16.3721 14.9913 16.2286 15.1349C16.0851 15.2784 15.8905 15.3591 15.6875 15.3594H4.3125C4.10952 15.3591 3.91492 15.2784 3.7714 15.1349C3.62787 14.9913 3.54712 14.7967 3.54688 14.5938V12.0712C3.77507 12.2185 4.0409 12.2969 4.3125 12.2969H7.70312V12.8438C7.70312 12.8868 7.7116 12.9295 7.72809 12.9693C7.74458 13.0091 7.76874 13.0453 7.79921 13.0758C7.82969 13.1063 7.86586 13.1304 7.90567 13.1469C7.94549 13.1634 7.98816 13.1719 8.03125 13.1719H11.9688C12.0118 13.1719 12.0545 13.1634 12.0943 13.1469C12.1341 13.1304 12.1703 13.1063 12.2008 13.0758C12.2313 13.0453 12.2554 13.0091 12.2719 12.9693C12.2884 12.9295 12.2969 12.8868 12.2969 12.8438V12.2969H15.6875C15.9591 12.2969 16.2249 12.2185 16.4531 12.0712V14.5938ZM8.35938 12.5156V11.4219H11.6406V12.5156H8.35938ZM16.4531 10.875C16.4529 11.078 16.3721 11.2726 16.2286 11.4161C16.0851 11.5596 15.8905 11.6404 15.6875 11.6406H12.2969V11.0938C12.2969 11.0507 12.2884 11.008 12.2719 10.9682C12.2554 10.9284 12.2313 10.8922 12.2008 10.8617C12.1703 10.8312 12.1341 10.8071 12.0943 10.7906C12.0545 10.7741 12.0118 10.7656 11.9688 10.7656H8.03125C7.98816 10.7656 7.94549 10.7741 7.90567 10.7906C7.86586 10.8071 7.82969 10.8312 7.79921 10.8617C7.76874 10.8922 7.74458 10.9284 7.72809 10.9682C7.7116 11.008 7.70312 11.0507 7.70312 11.0938V11.6406H4.3125C4.10952 11.6404 3.91492 11.5596 3.7714 11.4161C3.62787 11.2726 3.54712 11.078 3.54688 10.875V7.15625C3.54712 6.95327 3.62787 6.75867 3.7714 6.61515C3.91492 6.47162 4.10952 6.39087 4.3125 6.39062H15.6875C15.8905 6.39087 16.0851 6.47162 16.2286 6.61515C16.3721 6.75867 16.4529 6.95327 16.4531 7.15625V10.875Z" fill="#8090A7" stroke="#8090A7" stroke-width="0.3"/>
</svg>
  `;

  const SvgSkills = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M12.2477 14.9375H7.43516C7.33943 14.9375 7.24762 14.9755 7.17993 15.0431C7.11225 15.1107 7.07422 15.2025 7.07422 15.2981C7.07422 15.3937 7.11225 15.4854 7.17993 15.5531C7.24762 15.6207 7.33943 15.6587 7.43516 15.6587H8.0731C8.15631 16.0659 8.37777 16.4318 8.69999 16.6947C9.02222 16.9575 9.42543 17.101 9.84141 17.101C10.2574 17.101 10.6606 16.9575 10.9828 16.6947C11.305 16.4318 11.5265 16.0659 11.6097 15.6587H12.2477C12.3434 15.6587 12.4352 15.6207 12.5029 15.5531C12.5706 15.4854 12.6086 15.3937 12.6086 15.2981C12.6086 15.2025 12.5706 15.1107 12.5029 15.0431C12.4352 14.9755 12.3434 14.9375 12.2477 14.9375ZM9.84141 16.3799C9.61821 16.3792 9.4007 16.3095 9.21873 16.1804C9.03676 16.0512 8.89926 15.869 8.82511 15.6587H10.8577C10.7835 15.869 10.646 16.0512 10.4641 16.1804C10.2821 16.3095 10.0646 16.3792 9.84141 16.3799Z" fill="#8090A7"/>
  <path d="M12.2477 13.4941H7.43516C7.33943 13.4941 7.24762 13.5321 7.17993 13.5998C7.11225 13.6674 7.07422 13.7591 7.07422 13.8547C7.07422 13.9504 7.11225 14.0421 7.17993 14.1097C7.24762 14.1773 7.33943 14.2153 7.43516 14.2153H12.2477C12.3434 14.2153 12.4352 14.1773 12.5029 14.1097C12.5706 14.0421 12.6086 13.9504 12.6086 13.8547C12.6086 13.7591 12.5706 13.6674 12.5029 13.5998C12.4352 13.5321 12.3434 13.4941 12.2477 13.4941Z" fill="#8090A7"/>
  <path d="M6.83673 4.64169C5.35609 6.12104 5.1829 8.50162 6.43408 10.1791L7.83132 12.0527H7.43477C7.33904 12.0527 7.24723 12.0907 7.17954 12.1583C7.11186 12.226 7.07383 12.3177 7.07383 12.4133C7.07383 12.5089 7.11186 12.6007 7.17954 12.6683C7.24723 12.7359 7.33904 12.7739 7.43477 12.7739H12.2473C12.343 12.7739 12.4348 12.7359 12.5025 12.6683C12.5702 12.6007 12.6082 12.5089 12.6082 12.4133C12.6082 12.3177 12.5702 12.226 12.5025 12.1583C12.4348 12.0907 12.343 12.0527 12.2473 12.0527H11.8508L13.2481 10.1791C14.4992 8.50162 14.3261 6.12103 12.8453 4.64168C12.0479 3.8468 10.9675 3.40039 9.84101 3.40039C8.71457 3.40039 7.63412 3.84681 6.83673 4.64169ZM12.6693 9.74831L10.9508 12.0527H10.202V8.92759H11.0441C11.1399 8.92759 11.2317 8.8896 11.2994 8.82197C11.3671 8.75435 11.4051 8.66263 11.4051 8.56699C11.4051 8.47136 11.3671 8.37964 11.2994 8.31202C11.2317 8.24439 11.1399 8.2064 11.0441 8.2064H8.63789C8.54216 8.2064 8.45036 8.24439 8.38267 8.31202C8.31498 8.37964 8.27695 8.47136 8.27695 8.56699C8.27695 8.66263 8.31498 8.75435 8.38267 8.82197C8.45036 8.8896 8.54216 8.92759 8.63789 8.92759H9.48008V12.0527H8.73134L7.01285 9.74831C5.97433 8.35571 6.11802 6.37962 7.34712 5.15158C8.00909 4.49182 8.90597 4.1213 9.84102 4.1213C10.7761 4.1213 11.673 4.49182 12.3349 5.15158C13.564 6.37962 13.7078 8.35571 12.6693 9.74831Z" fill="#8090A7"/>
  </svg>`;

  const SvgLanguage = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M2.22218 5.88748H7.20513C6.96726 7.19923 6.40014 8.40531 5.58274 9.41267C5.02458 8.72544 4.5756 7.94636 4.27378 7.09408C4.17124 6.8049 3.8525 6.65299 3.56441 6.75608C3.27524 6.85807 3.12387 7.176 3.22614 7.46517C3.58801 8.4868 4.13689 9.41463 4.81957 10.2268C4.12678 10.8675 3.31569 11.3909 2.40881 11.7539C2.12398 11.8678 1.98537 12.1912 2.09957 12.476C2.18637 12.6936 2.39498 12.8254 2.61552 12.8254C2.68415 12.8254 2.75387 12.8129 2.82168 12.7858C3.86237 12.3692 4.79254 11.7675 5.5862 11.0306C6.38258 11.769 7.30672 12.3733 8.33736 12.7858C8.40491 12.8129 8.47489 12.8254 8.54353 12.8254C8.76407 12.8254 8.97267 12.6936 9.05948 12.4766C9.17368 12.1917 9.03506 11.8684 8.75023 11.7539C7.85227 11.3945 7.0466 10.8688 6.35152 10.2269C7.37755 9.00427 8.07108 7.51223 8.32817 5.88748H8.93686C9.24367 5.88748 9.49242 5.639 9.49242 5.33192C9.49242 5.02485 9.24367 4.77637 8.93686 4.77637H6.13494V4.04286C6.13494 3.73579 5.88619 3.4873 5.57939 3.4873C5.27258 3.4873 5.02383 3.73579 5.02383 4.04286V4.77637H2.22218C1.91538 4.77637 1.66663 5.02485 1.66663 5.33192C1.66663 5.639 1.91538 5.88748 2.22218 5.88748Z" fill="#8090A7"/>
  <path d="M15.021 8.28225C14.8051 7.79071 14.3307 7.45705 13.7821 7.49286C13.2453 7.5048 12.7736 7.83629 12.5804 8.33759L9.72155 15.7578C9.61114 16.0443 9.75383 16.3655 10.0403 16.4762C10.1059 16.5011 10.1735 16.513 10.2399 16.513C10.4629 16.513 10.6734 16.378 10.7583 16.1571L11.6791 13.7673H16.2115L17.269 16.1805C17.3922 16.4615 17.7204 16.5874 18.0009 16.4664C18.2819 16.3432 18.41 16.0155 18.2868 15.7345L15.021 8.28225ZM12.1072 12.6562L13.6172 8.73689C13.6609 8.6235 13.755 8.60452 13.8074 8.60343C13.8597 8.6056 13.9544 8.61699 14.0032 8.72821L15.7246 12.6562H12.1072Z" fill="#8090A7"/>
</svg>`;






  return <>
    <Card>
      <CardContent>

        <Typography className='title-section'>{t("Skills & Career")}</Typography>
        <br />

        <Typography sx={{marginBottom:"6px"}}>{t('Branch')}</Typography>

<Controller
  name='branch_id'
  control={control}
  render={({ field }) => (
    <TextField
      {...field}
      select
      fullWidth
      error={Boolean(errors?.branch_id)}
      helperText={errors?.branch_id?.message}
      value={branch}
      SelectProps={{

        displayEmpty: true,
        onChange: e => {
          field.onChange(e)
          handleSelectBranchChange(e)
        }
      }}
      size='small'
    >
      <MenuItem value='' >{`${t('Branch')}`}</MenuItem>

      {SelectBranch?.data?.data?.map((val, index) => (
        <MenuItem key={val.id} value={val.id}>
          {val.name}
        </MenuItem>
      ))}
    </TextField>
  )}
/>

<Typography sx={{marginTop:"14px",marginBottom:"6px"}}>{t("Specialization")}</Typography>

<Controller
  name='specialization'
  control={control}
  render={({ field }) => (
    <TextField
      {...field}
      select
      fullWidth
      error={Boolean(errors?.specialization)}
      {...(errors?.specialization && {
        helperText: errors?.specialization?.message
      })}
      value={specialization}
      SelectProps={{
        displayEmpty: true,
        onChange: e => {
          field.onChange(e)
          handleSpecializationChange(e)
        }
      }}
      size='small'
    >
      <MenuItem value='' >
      {t("work specialization")}
      </MenuItem>

      {data?.data?.data?.specialisation?.map((val, index) => (
        <MenuItem key={index} value={val}>
          {val}
        </MenuItem>
      ))}
    </TextField>
  )}
/>




        <Stack direction={'column'} spacing={3} width={'100%'} >
          <Typography sx={{marginTop:"14px"}}>{t("Education")}</Typography>






          {fields.map((field, index) => (<>
            <Stack spacing={4} key={field.id}>
              {index === 1 && (
                <CloseIcon sx={{ cursor: "pointer", '&:hover': { color: 'red' } }} onClick={() => handleRemoveClick(index)} />
              )}
              <Controller
                name={`educations[${index}].study`}
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={t("study")}
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={Boolean(errors?.educations?.[index]?.study)}
                    {...(errors?.educations?.[index]?.study && { helperText: errors?.educations?.[index]?.study.message })}

                  />
                )}
              />
              <Controller
                name={`educations[${index}].degree`}
                control={control}
                defaultValue={field.degree}
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    defaultValue={"Degree"}
                    label={t("Degree")}
                    SelectProps={{
                      value: field.value,  // Use field.value here
                      onChange: (e) => {
                        field.onChange(e);  // Ensure field.onChange is called
                        handleDegreeChange(e);
                      },
                    }}
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={Boolean(errors?.educations?.[index]?.degree)}
                    {...(errors?.educations?.[index]?.degree && { helperText: errors?.educations?.[index]?.degree.message })}
                  >
                    <MenuItem value="Degree">{t("Degree")}</MenuItem>
                    <MenuItem value="bachelor">{t("Bachelor")}</MenuItem>
                    <MenuItem value="master">{t("Master")}</MenuItem>
                    <MenuItem value="phd">{t("PhD")}</MenuItem>
                  </TextField>
                )}
              />

            </Stack>
          </>
          ))}
          <Typography sx={{ cursor: "pointer" }} color="primary" onClick={handleAddClick}>
            {t("Add Education")}
          </Typography>





          {/*  *********************************************************************                                          */}

          <Typography>{t("Certificates")}</Typography>

          {fieldsCertificate.map((field, index) => (
          <Stack direction={"column"} spacing={4} key={field.id}>

            <Controller
              name={`certificates[${index}].content`}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  error={Boolean(errors.certificates && errors.certificates[index])}
                  helperText={errors.certificates && errors.certificates[index]?.message}
                  size='small'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {index!=0&&<CloseIcon style={{ cursor:'pointer',color:'red' , padding: '1',margin: '0px 0px'}} onClick={() => handleRemoveClickcertificate(index)}/>}
                      </InputAdornment>
                    ),
                  }}
                  label={
                    <Stack direction={'row'} spacing={2} >
                      <Box>
                        <img src={`data:image/svg+xml;utf8,${encodeURIComponent(SvgCertificate)}`} />
                      </Box>
                      <Box>
                        {t('Certificates')}
                      </Box>

                    </Stack>
                  }
                />
              )}
            />
          </Stack>
          ))}
          <Typography sx={{ cursor: "pointer" }} color="primary" onClick={handleAddClickCertificate}>
            {t("Add Certificate")}
          </Typography>


          {/* *********************************************************************                                          */}

          <Typography>{t("Experience")}</Typography>
          {fieldsExperience.map((field, index) => (
            <Stack Stack spacing={4} key={field.id}>

              <Controller
                name={`experiences[${index}].content`}
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    error={Boolean(errors.experiences && errors.experiences[index])}
                    helperText={errors.experiences && errors.experiences[index]?.message}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          {index!=0&&<CloseIcon style={{ cursor:'pointer',color:'red' , padding: '1',margin: '0px 0px'}} onClick={() => handleRemoveClickExperience(index)}/>}
                        </InputAdornment>
                      ),
                    }}
                    size="small"
                    label={
                      <Stack direction={'row'} spacing={2}>
                        <Box>
                          <img src={`data:image/svg+xml;utf8,${encodeURIComponent(SvgExperience)}`} />
                        </Box>
                        <Box>{t('Experience')}</Box>
                      </Stack>
                    }
                  />
                )}
              />
            </Stack>
          ))}

          <Typography sx={{ cursor: "pointer" }} color="primary" onClick={handleAddClickExperience}>
            {t("Add Experience")}
          </Typography>


          {/* *********************************************************************************** */}
          <Typography>{t("Skills")}</Typography>
          {fieldsSkills.map((field, index) => (

            <Stack direction={'row'} key={field.id} alignItems={'end'} >
              <Stack width={'100%'} direction={'column'} >

                <Controller
                  name={`skills[${index}].skills`}
                  control={control}
                  defaultValue={field.skills}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            {index!=0&&<CloseIcon style={{ cursor:'pointer',color:'red' , padding: '1',margin: '0px 0px'}} onClick={() => handleRemoveClickSkills(index)}/>}
                          </InputAdornment>
                        ),
                      }}
                      size='small'
                      label={
                        <Stack direction={'row'} spacing={2}>
                          <Box>
                            <img src={`data:image/svg+xml;utf8,${encodeURIComponent(SvgSkills)}`} alt="Skills Icon" />
                          </Box>
                          <Box>
                            {t('Skills')}
                          </Box>
                        </Stack>
                      }
                    />
                  )}
                />
              </Stack>
              <Box marginTop={'1%'}>
                <Rating
                  name={`skills[${index}].rate`}
                  value={field.rate}
                  onChange={(event, newValue) => {
                    handleRatingChange(index, newValue);
                  }}

                />

              </Box>
            </Stack>
          ))}
          <Typography sx={{ cursor: "pointer" }} color="primary" onClick={handleAddClickSkills}>
            {t("Add Skills")}
          </Typography>

          <Typography>{t("Languages")}</Typography>
          {fieldsLanguage.map((field, index) => (
            <Stack direction={'row'} key={field.id} alignItems={'end'}>
              <Stack direction={'column'} width={'100%'} >

                <Controller
                  name={`languages[${index}].languages`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            {index!=0&&<CloseIcon style={{ cursor:'pointer',color:'red' , padding: '1',margin: '0px 0px'}} onClick={() => handleRemoveClickLanguage(index)}/>}
                          </InputAdornment>
                        ),
                      }}
                      size='small'
                      label={
                        <Stack direction={'row'} spacing={2}>
                          <Box>
                            <img src={`data:image/svg+xml;utf8,${encodeURIComponent(SvgLanguage)}`} alt="Language Icon" />
                          </Box>
                          <Box>
                            {t('Language')}
                          </Box>
                        </Stack>

                      }

                    />
                  )}
                />
              </Stack>
              <Box marginTop={'1%'}>
                <Rating
                  name={`languages[${index}].rate`}
                  value={field.rate}

                  onChange={(event, newValue) => {
                    handleLanguageChange(index, newValue);
                  }}
                />      </Box>
            </Stack>
          ))}
          <Typography sx={{ cursor: "pointer" }} color="primary" onClick={handleAddClickLanguage}>
            {t("Add Language")}
          </Typography>

        </Stack>
      </CardContent>
    </Card>
  </>

}

;
