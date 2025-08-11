import fetch, { Headers } from 'node-fetch';
import { academicSession } from '../types/academicSession-sis';
import { class365 } from '../constants';
export async function getAcademicSession(): Promise<academicSession>{
    return new Promise((resolve,reject) => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", class365.key);
        

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        } as any;

    fetch(class365.baseUrl+"rest/academicSessions?status=In Progress", requestOptions)
    .then((response) => response.json())
    .then((result) =>{
        if(result.success === 1){
            let data = result.data.filter(x=> x.name.indexOf(((new Date().getFullYear())-1).toString()) >= 0)
            if(data.length > 0)
            resolve(data[0] as academicSession);
        } else {
            reject(result.error)
        }
    })
    .catch((error) => reject(error));
    })
}
export const academicData ={
    "success": 1,
    "data": [
        {
            "class_id": 1,
            "class_name": "Human Services Diploma",
            "class_code": "HSD",
            "total": null,
            "section": [
                {
                    "section_id": 43,
                    "section_name": "Overall Grade",
                    "section_code": "OG-102",
                    "total": null,
                    "subject": [
                        {
                            "subject_id": 866,
                            "subject_name": "Working with Vulnerable Populations",
                            "subject_code": "HSP220",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 961,
                            "subject_name": "Test Class",
                            "subject_code": "CC101",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 875,
                            "subject_name": "Human Services II Practicum",
                            "subject_code": "HSP112",
                            "subject_credit": "6",
                            "type": "Core"
                        },
                        {
                            "subject_id": 874,
                            "subject_name": "Human Services I Practicum",
                            "subject_code": "HSP111",
                            "subject_credit": "6",
                            "type": "Core"
                        },
                        {
                            "subject_id": 873,
                            "subject_name": "Community Development and Engagement",
                            "subject_code": "HSP210",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 872,
                            "subject_name": "Introduction to Sociology",
                            "subject_code": "SOC101",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 871,
                            "subject_name": "Professionalism and Ethics in Human Services",
                            "subject_code": "PHL352",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 870,
                            "subject_name": "Working with Newcomers and Immigrants",
                            "subject_code": "HSP345",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 869,
                            "subject_name": "Addiction, Mental Health and Treatment",
                            "subject_code": "PSY400",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 868,
                            "subject_name": "Indigenous People and Culture",
                            "subject_code": "HSP300",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 867,
                            "subject_name": "Case Management Skills",
                            "subject_code": "HSP290",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 855,
                            "subject_name": "Introduction to Human Services",
                            "subject_code": "HSP101",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 865,
                            "subject_name": "Introduction to Disability and Behaviour Management",
                            "subject_code": "HSP236",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 864,
                            "subject_name": "Introduction to Psychology",
                            "subject_code": "PSY101",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 863,
                            "subject_name": "Family-Systems and Support",
                            "subject_code": "HSP230",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 862,
                            "subject_name": "Crisis Intervention & Management",
                            "subject_code": "HSP204",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 861,
                            "subject_name": "Interviews and Counselling Skills",
                            "subject_code": "HSP205",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 860,
                            "subject_name": "Psychology of Human Development",
                            "subject_code": "PSY115",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 859,
                            "subject_name": "Social Welfare and Services in Canada",
                            "subject_code": "HSP102",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 858,
                            "subject_name": "Understanding Diversity and Inclusion",
                            "subject_code": "HSP200",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 857,
                            "subject_name": "Interpersonal Communication",
                            "subject_code": "HSP110",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 856,
                            "subject_name": "Introduction to English Comprehension",
                            "subject_code": "ENG101",
                            "subject_credit": "3",
                            "type": "Core"
                        }
                    ]
                }
            ]
        },
        {
            "class_id": 2,
            "class_name": "Business Administration Diploma - Accounting",
            "class_code": "ACCT",
            "total": null,
            "section": [
                {
                    "section_id": 29,
                    "section_name": "Overall Grade",
                    "section_code": "OG-101",
                    "total": null,
                    "subject": [
                        {
                            "subject_id": 843,
                            "subject_name": "Audit & Assurance",
                            "subject_code": "ACC255",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 854,
                            "subject_name": "Advanced Accounting and Finance Practicum II",
                            "subject_code": "ACC511",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 853,
                            "subject_name": "Advanced Accounting and Finance Practicum I",
                            "subject_code": "ACC501",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 852,
                            "subject_name": "Payroll Fundamentals II",
                            "subject_code": "PCP212",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 851,
                            "subject_name": "Payroll Fundamentals I",
                            "subject_code": "PCP211",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 850,
                            "subject_name": "Payroll Compliance Legislation",
                            "subject_code": "PCP101",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 849,
                            "subject_name": "Applied Corporate and Personal Taxation",
                            "subject_code": "TAX311",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 848,
                            "subject_name": "Applied Corporate Finance",
                            "subject_code": "FNC307",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 847,
                            "subject_name": "Business Applications",
                            "subject_code": "BUS301",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 846,
                            "subject_name": "Ethics and Workplace Skills",
                            "subject_code": "BUS312",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 845,
                            "subject_name": "Accounting Software Application – Sage 50/Quikbook",
                            "subject_code": "MIS315",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 844,
                            "subject_name": "Intermediate Management Accounting",
                            "subject_code": "ACC215",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 831,
                            "subject_name": "Business Communication",
                            "subject_code": "BCM101",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 842,
                            "subject_name": "Advanced Financial Reporting",
                            "subject_code": "ACC251",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 841,
                            "subject_name": "Taxation",
                            "subject_code": "TAX201",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 840,
                            "subject_name": "Corporate Finance",
                            "subject_code": "FNC207",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 839,
                            "subject_name": "Management Information Analytics",
                            "subject_code": "MIS121",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 838,
                            "subject_name": "Introduction to Data Analysis",
                            "subject_code": "MAT101",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 837,
                            "subject_name": "Intermediate Financial Reporting II",
                            "subject_code": "ACC152",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 836,
                            "subject_name": "Intermediate Financial Reporting I",
                            "subject_code": "ACC151",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 835,
                            "subject_name": "Introductory Management Accounting",
                            "subject_code": "ACC115",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 834,
                            "subject_name": "Business Law",
                            "subject_code": "LAW110",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 833,
                            "subject_name": "Introductory Financial Accounting",
                            "subject_code": "ACC101",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 832,
                            "subject_name": "Introduction to Business Administration",
                            "subject_code": "BUS110",
                            "subject_credit": "3",
                            "type": "Core"
                        }
                    ]
                }
            ]
        },
        {
            "class_id": 3,
            "class_name": "Business Administration Diploma - Retail Mgt",
            "class_code": "RTMGT",
            "total": null,
            "section": [
                {
                    "section_id": 44,
                    "section_name": "Overall Grade",
                    "section_code": "OG-103",
                    "total": null,
                    "subject": [
                        {
                            "subject_id": 887,
                            "subject_name": "Retail Business Ethics",
                            "subject_code": "MKT212",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 897,
                            "subject_name": "Retail Management Practicum II",
                            "subject_code": "RMP522",
                            "subject_credit": "6",
                            "type": "Core"
                        },
                        {
                            "subject_id": 896,
                            "subject_name": "Retail Management Practicum I",
                            "subject_code": "RMP511",
                            "subject_credit": "6",
                            "type": "Core"
                        },
                        {
                            "subject_id": 895,
                            "subject_name": "Problem Solving and Decision Making",
                            "subject_code": "BUS305",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 894,
                            "subject_name": "Health and Safety in the Workplace",
                            "subject_code": "HSP301",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 893,
                            "subject_name": "Managing Diversity in the Workplace",
                            "subject_code": "BUS301",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 892,
                            "subject_name": "Business Logistics Management",
                            "subject_code": "BUS222",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 891,
                            "subject_name": "Security and Loss Prevention Management",
                            "subject_code": "LOS216",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 890,
                            "subject_name": "Marketing Communications",
                            "subject_code": "MKT230",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 889,
                            "subject_name": "Retail Sales Management",
                            "subject_code": "MKT215",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 888,
                            "subject_name": "Consumer Behaviour and Customer Service",
                            "subject_code": "BUS201",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 876,
                            "subject_name": "Business Communication",
                            "subject_code": "BCM101",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 886,
                            "subject_name": "Introduction to Marketing",
                            "subject_code": "MKT201",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 885,
                            "subject_name": "Introduction to Micro-economics",
                            "subject_code": "ECO101",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 884,
                            "subject_name": "Business Management and Organisational Behaviour",
                            "subject_code": "BUS111",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 883,
                            "subject_name": "Management Information Analytics",
                            "subject_code": "MIS121",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 882,
                            "subject_name": "Payroll Compliance Legislation",
                            "subject_code": "PCP101",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 881,
                            "subject_name": "Introduction to Marketing Data Analysis",
                            "subject_code": "MAT101",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 880,
                            "subject_name": "Introductory Management Accounting",
                            "subject_code": "ACC115",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 879,
                            "subject_name": "Business Law",
                            "subject_code": "LAW110",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 878,
                            "subject_name": "Introductory Financial Accounting",
                            "subject_code": "ACC101",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 877,
                            "subject_name": "Introduction to Business Administration",
                            "subject_code": "BUS110",
                            "subject_credit": "3",
                            "type": "Core"
                        }
                    ]
                }
            ]
        },
        {
            "class_id": 4,
            "class_name": "Medical Office Assistants and Unit Clerks",
            "class_code": "MOA",
            "total": null,
            "section": [
                {
                    "section_id": 45,
                    "section_name": "Overall Grade",
                    "section_code": "OG-104",
                    "total": null,
                    "subject": [
                        {
                            "subject_id": 898,
                            "subject_name": "MS Office Application",
                            "subject_code": "MSO100",
                            "subject_credit": "6",
                            "type": "Core"
                        },
                        {
                            "subject_id": 899,
                            "subject_name": "Business Communication",
                            "subject_code": "BCM100",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 900,
                            "subject_name": "Canadian Healthcare System Ethics & Law",
                            "subject_code": "HTC102",
                            "subject_credit": "6",
                            "type": "Core"
                        },
                        {
                            "subject_id": 901,
                            "subject_name": "Medical Office & Health Unit Administrative Procedure",
                            "subject_code": "MOA110",
                            "subject_credit": "6",
                            "type": "Core"
                        },
                        {
                            "subject_id": 902,
                            "subject_name": "Medical Terminologies",
                            "subject_code": "MTE112",
                            "subject_credit": "6",
                            "type": "Core"
                        },
                        {
                            "subject_id": 903,
                            "subject_name": "Applied Anatomy Physiology and Pharmacology for Medical Administrator",
                            "subject_code": "ANT110",
                            "subject_credit": "6",
                            "type": "Core"
                        },
                        {
                            "subject_id": 904,
                            "subject_name": "Patients Services Management",
                            "subject_code": "PSM100",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 905,
                            "subject_name": "Medical Billing Coding & Transcription",
                            "subject_code": "MDB103",
                            "subject_credit": "6",
                            "type": "Core"
                        },
                        {
                            "subject_id": 906,
                            "subject_name": "Electronic Medical Records Management",
                            "subject_code": "EMR105",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 907,
                            "subject_name": "Clinical Procedures",
                            "subject_code": "CLN100",
                            "subject_credit": "4",
                            "type": "Core"
                        },
                        {
                            "subject_id": 908,
                            "subject_name": "First Aid & CPR Training",
                            "subject_code": "FAD101",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 909,
                            "subject_name": "Entrepreneurship Development",
                            "subject_code": "ETP300",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 910,
                            "subject_name": "Career and Employment Success Strategies",
                            "subject_code": "MOP305",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 911,
                            "subject_name": "Medical Office Practicum",
                            "subject_code": "MOP352",
                            "subject_credit": "6",
                            "type": "Core"
                        }
                    ]
                }
            ]
        },
        {
            "class_id": 5,
            "class_name": "Education Assistant Diploma",
            "class_code": "EAD",
            "total": null,
            "section": [
                {
                    "section_id": 46,
                    "section_name": "Overall Grade",
                    "section_code": "OG-105",
                    "total": null,
                    "subject": [
                        {
                            "subject_id": 951,
                            "subject_name": "Non-Violent Crisis Intervention",
                            "subject_code": "NVC110",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 959,
                            "subject_name": "Education Assistant Practicum",
                            "subject_code": "EAP302",
                            "subject_credit": "6",
                            "type": "Core"
                        },
                        {
                            "subject_id": 958,
                            "subject_name": "Entrepreneurship Development Strategies",
                            "subject_code": "ETP120",
                            "subject_credit": "4",
                            "type": "Core"
                        },
                        {
                            "subject_id": 957,
                            "subject_name": "Career and Employment Strategies",
                            "subject_code": "EAP301",
                            "subject_credit": "4",
                            "type": "Core"
                        },
                        {
                            "subject_id": 956,
                            "subject_name": "Applied Suicide Intervention Skills Training (ASIST)",
                            "subject_code": "AST100",
                            "subject_credit": "2",
                            "type": "Core"
                        },
                        {
                            "subject_id": 955,
                            "subject_name": "Linguistic and Numeracy Learning of Children",
                            "subject_code": "CUR201",
                            "subject_credit": "4",
                            "type": "Core"
                        },
                        {
                            "subject_id": 954,
                            "subject_name": "Assistive Technology & Principles of Universal Design",
                            "subject_code": "TCH103",
                            "subject_credit": "6",
                            "type": "Core"
                        },
                        {
                            "subject_id": 953,
                            "subject_name": "Teaching Life Skills",
                            "subject_code": "TLS100",
                            "subject_credit": "6",
                            "type": "Core"
                        },
                        {
                            "subject_id": 952,
                            "subject_name": "Working with Student Exceptionalities",
                            "subject_code": "WRK100",
                            "subject_credit": "6",
                            "type": "Core"
                        },
                        {
                            "subject_id": 943,
                            "subject_name": "Educational Assistant Profession in Canada",
                            "subject_code": "EAP100",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 950,
                            "subject_name": "Assessment & Behavioral Management",
                            "subject_code": "ABM101",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 949,
                            "subject_name": "Inclusive & Differentiated Classroom",
                            "subject_code": "IDC123",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 948,
                            "subject_name": "Curriculum Development Pedagogies and Technology",
                            "subject_code": "CUR101",
                            "subject_credit": "4",
                            "type": "Core"
                        },
                        {
                            "subject_id": 947,
                            "subject_name": "Child & Adolescent Development",
                            "subject_code": "CAD113",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 946,
                            "subject_name": "Communication Skills for Educational Assistant",
                            "subject_code": "COM105",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 945,
                            "subject_name": "Academic Writing & Grammar",
                            "subject_code": "ACW100",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 944,
                            "subject_name": "Microsoft Office Application",
                            "subject_code": "CMP103",
                            "subject_credit": "6",
                            "type": "Core"
                        }
                    ]
                }
            ]
        },
        {
            "class_id": 6,
            "class_name": "Pharmacy Assistant Diploma",
            "class_code": "PAD",
            "total": null,
            "section": [
                {
                    "section_id": 47,
                    "section_name": "Overall Grade",
                    "section_code": "OG-106",
                    "total": null,
                    "subject": [
                        {
                            "subject_id": 912,
                            "subject_name": "MS Office Application",
                            "subject_code": "MSO100",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 913,
                            "subject_name": "Business Communication",
                            "subject_code": "BCM100",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 914,
                            "subject_name": "Canadian Healthcare System Ethics & Law",
                            "subject_code": "CHS121",
                            "subject_credit": "6",
                            "type": "Core"
                        },
                        {
                            "subject_id": 915,
                            "subject_name": "Medical Terminology",
                            "subject_code": "MDT101",
                            "subject_credit": "6",
                            "type": "Core"
                        },
                        {
                            "subject_id": 916,
                            "subject_name": "Applied Anatomy Physiology & Pharmacology",
                            "subject_code": "ANT112",
                            "subject_credit": "6",
                            "type": "Core"
                        },
                        {
                            "subject_id": 917,
                            "subject_name": "Pharmaceutical Calculations",
                            "subject_code": "PHM101",
                            "subject_credit": "6",
                            "type": "Core"
                        },
                        {
                            "subject_id": 918,
                            "subject_name": "Pharmacy Software-Kroll",
                            "subject_code": "PHM142",
                            "subject_credit": "6",
                            "type": "Core"
                        },
                        {
                            "subject_id": 919,
                            "subject_name": "Pharmacy Computer Applications & Billing",
                            "subject_code": "PHM151",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 920,
                            "subject_name": "Non-Sterile Compounding",
                            "subject_code": "PHM161",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 921,
                            "subject_name": "Introduction to Hospital Pharmacy",
                            "subject_code": "PHM201",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 922,
                            "subject_name": "Community Pharmacy Dispensing and Lab Skills",
                            "subject_code": "PHM204",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 923,
                            "subject_name": "Institutional Pharmacy & Sterile Practice",
                            "subject_code": "PHM203",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 924,
                            "subject_name": "Pharmacy Systems Management & Inventory Control",
                            "subject_code": "PHM213",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 925,
                            "subject_name": "First Aid & CPR Training",
                            "subject_code": "CPR101",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 926,
                            "subject_name": "Career and Employment Success Strategies",
                            "subject_code": "PAR301",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 927,
                            "subject_name": "Pharmacy Assistant Practicum",
                            "subject_code": "PAP315",
                            "subject_credit": "6",
                            "type": "Core"
                        }
                    ]
                }
            ]
        },
        {
            "class_id": 7,
            "class_name": "Digital Marketing Diploma",
            "class_code": "DMD",
            "total": null,
            "section": [
                {
                    "section_id": 48,
                    "section_name": "Overall Grade",
                    "section_code": "OG-108",
                    "total": null,
                    "subject": [
                        {
                            "subject_id": 928,
                            "subject_name": "Marketing and Advertising Management",
                            "subject_code": "MKT101",
                            "subject_credit": "6",
                            "type": "Core"
                        },
                        {
                            "subject_id": 929,
                            "subject_name": "Business Communication",
                            "subject_code": "BCM100",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 930,
                            "subject_name": "Business Ethics",
                            "subject_code": "BUS312",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 931,
                            "subject_name": "Foundation of Digital Marketing",
                            "subject_code": "DMA115",
                            "subject_credit": "6",
                            "type": "Core"
                        },
                        {
                            "subject_id": 932,
                            "subject_name": "Web Design and Optimization",
                            "subject_code": "WEB103",
                            "subject_credit": "14",
                            "type": "Core"
                        },
                        {
                            "subject_id": 933,
                            "subject_name": "E-Commerce Management",
                            "subject_code": "ECM100",
                            "subject_credit": "6",
                            "type": "Core"
                        },
                        {
                            "subject_id": 934,
                            "subject_name": "Content and Email Marketing",
                            "subject_code": "CMM210",
                            "subject_credit": "6",
                            "type": "Core"
                        },
                        {
                            "subject_id": 935,
                            "subject_name": "Social Media Marketing",
                            "subject_code": "SMM212",
                            "subject_credit": "9",
                            "type": "Core"
                        },
                        {
                            "subject_id": 936,
                            "subject_name": "Search Engine Marketing",
                            "subject_code": "SEM213",
                            "subject_credit": "6",
                            "type": "Core"
                        },
                        {
                            "subject_id": 937,
                            "subject_name": "Search Engine Optimization",
                            "subject_code": "SEO214",
                            "subject_credit": "6",
                            "type": "Core"
                        },
                        {
                            "subject_id": 938,
                            "subject_name": "Digital Marketing Analytics CRM and Automation Tools",
                            "subject_code": "DMA215",
                            "subject_credit": "9",
                            "type": "Core"
                        },
                        {
                            "subject_id": 939,
                            "subject_name": "Mobile Marketing",
                            "subject_code": "MBM352",
                            "subject_credit": "6",
                            "type": "Core"
                        },
                        {
                            "subject_id": 940,
                            "subject_name": "Entrepreneurship Development Strategies",
                            "subject_code": "ENT305",
                            "subject_credit": "6",
                            "type": "Core"
                        },
                        {
                            "subject_id": 941,
                            "subject_name": "Career Success and Employment Strategies",
                            "subject_code": "DMP531",
                            "subject_credit": "3",
                            "type": "Core"
                        },
                        {
                            "subject_id": 942,
                            "subject_name": "Digital Marketing Practicum",
                            "subject_code": "DMP532",
                            "subject_credit": "6",
                            "type": "Core"
                        }
                    ]
                }
            ]
        }
    ],
    "meta_data": {
        "total_classes": 7,
        "total_sections": 30,
        "total_subjects": 531
    }
}