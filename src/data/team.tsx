// Image optimisation : /w_500/q_auto/f_auto

interface Head{
  image: string,
  name: string,
  role: string,
  instagram: string,
  linkedin: string
}

interface Dep{
  department: string,
  heads: Head[]
}

export const dep: Dep[]= [
  {
    department: "President",
    heads: [
      {
        image: "",
        name: "Prakhar Mishra",
        role: "President",
        instagram: "https://www.instagram.com/prakhar_2809/",
        linkedin: "https://www.linkedin.com/in/prakhar-mishra-a8378a217/",
      },
    ],
  },
  {
    department: "Vice President",
    heads: [
      {
        image: "https://res.cloudinary.com/deeqsba43/image/upload/w_500/q_auto/f_auto/v1696233368/gsph/j0gandmmgj4sbbtx64k2.jpg",
        name: "Nishit Jain",
        role: "Vice President",
        instagram: "https://www.instagram.com/j_nishit/",
        linkedin: "https://www.linkedin.com/in/nishit-jain-/",
      },
      {
        image: "",
        name: "Varun Yadav",
        role: "Vice President",
        instagram: "https://www.instagram.com/turrrbulent/",
        linkedin: "https://www.linkedin.com/in/varunyadav01/",
      },
    ],
  },
  {
    department: "Content",
    heads: [
      {
        image: "",
        name: "Shivansh Jain",
        role: "Head, Content",
        instagram: "https://www.instagram.com/shivansh_code_piano/",
        linkedin: "https://www.linkedin.com/in/shivansh-jain-921967224/",
      },
      {
        image: "",
        name: "Sumit Gupta",
        role: "Head, Content",
        instagram: "https://www.instagram.com/guptasumit_2034/",
        linkedin: "https://www.linkedin.com/in/sumit-gupta-871a82225/",
      },
    ],
  },
  {
    department: "Design",
    heads: [
      {
        image: "https://res.cloudinary.com/deeqsba43/image/upload/v1696188883/gsph/cxtw1joimjinqjsuaxde.png",
        name: "Suman Debnath",
        role: "Head, Design",
        instagram: "https://www.instagram.com/sumex.in/",
        linkedin: "https://www.linkedin.com/in/suman-debnath6/",
      },
      {
        image: "",
        name: "Shivam Bhatiya",
        role: "Head, Design",
        instagram: "https://www.instagram.com/shivam_bhatiaa/",
        linkedin: "https://www.linkedin.com/in/shivam-bhatia03/",
      },
    ],
  },
  {
    department: "Management",
    heads: [
      {
        image: "https://res.cloudinary.com/deeqsba43/image/upload/w_500/q_auto/f_auto/v1696233352/gsph/nhh0mzlhyhpfcnvtlzwa.jpg",
        name: "Namrata Vaswani",
        role: "Head, Management",
        instagram: "https://www.instagram.com/namrata___v/",
        linkedin: "https://www.linkedin.com/in/namrata-vaswani-915a501b2/",
      },
      {
        image: "https://res.cloudinary.com/deeqsba43/image/upload/w_500/q_auto/f_auto/v1696233350/gsph/cauxucwjuwwii4t6bkj7.jpg",
        name: "Saksham Dariya",
        role: "Head, Management",
        instagram: "https://www.instagram.com/_skkssmm_/",
        linkedin: "https://www.linkedin.com/in/saksham-dariya-a914ba243/",
      },
    ],
  },
  {
    department: "Operations",
    heads: [
      {
        image: "",
        name: "Gargi Maheshwari",
        role: "Head, Operations",
        instagram: "https://www.instagram.com/gargi_109/",
        linkedin: "https://www.linkedin.com/in/gargi-maheshwari-7892b7240/",
      },
      {
        image: "https://res.cloudinary.com/deeqsba43/image/upload/w_500/q_auto/f_auto/v1696233354/gsph/a18biai4klqf1tqs1eff.jpg",
        name: "Mayank Rampure",
        role: "Head, Operations",
        instagram: "https://www.instagram.com/mayankrampure_4506/",
        linkedin: "https://www.linkedin.com/in/mayank-rampure-176777210/",
      },
    ],
  },
  {
    department: "Finance",
    heads: [
      {
        image: "https://res.cloudinary.com/deeqsba43/image/upload/w_500/q_auto/f_auto/v1696233351/gsph/iwfr97oguidawt7qivcj.jpg",
        name: "Tanay Agrawal",
        role: "Head, Finance",
        instagram: "https://www.instagram.com/its_tanayagl/",
        linkedin: "https://www.linkedin.com/in/tanay-agrawal-9596b1233/",
      },
    ],
  },
  {
    department: "Public Relations",
    heads: [
      {
        image: "",
        name: "Nihal Shivhare",
        role: "Head, Public Relations",
        instagram: "https://www.instagram.com/nihal_shivhare_/",
        linkedin: "https://www.linkedin.com/in/nihal-shivhare-5870b91b9/",
      },
      {
        image: "https://res.cloudinary.com/deeqsba43/image/upload/w_500/q_auto/f_auto/v1696233365/gsph/yeit82raqfhiykayjdll.jpg",
        name: "Swasti Kataria",
        role: "Head, Public Relations",
        instagram: "https://www.instagram.com/swastikataria/",
        linkedin: "https://www.linkedin.com/in/swasti-kataria/",
      },
    ],
  },
  {
    department: "External Affairs",
    heads: [
      {
        image: "https://res.cloudinary.com/deeqsba43/image/upload/w_500/q_auto/f_auto/v1696233349/gsph/isxoywospxsez0x5coeq.jpg",
        name: "Shubhra Gite",
        role: "Head, External Affairs",
        instagram: "https://www.instagram.com/shubhragite/",
        linkedin: "",
      },
      {
        image: "https://res.cloudinary.com/deeqsba43/image/upload/w_500/q_auto/f_auto/v1696233353/gsph/ubzqa4slc8ftlj0k7eoj.heic",
        name: "Yash Garwal",
        role: "Head, External Affairs",
        instagram: "https://www.instagram.com/yash_garwal01/",
        linkedin: "https://www.linkedin.com/in/yash-garwal-0174a6276/",
      },
    ],
  },
  {
    department: "Marketing and Promotions",
    heads: [
      {
        image: "",
        name: "Amrita Pandey",
        role: "Head, Marketing and Promotions",
        instagram: "https://www.instagram.com/amrita.pandey26/",
        linkedin: "https://www.linkedin.com/in/amritapandey26/",
      },
      {
        image: "",
        name: "Mitali Khare",
        role: "Head, Marketing and Promotions",
        instagram: "https://www.instagram.com/mit_1127/",
        linkedin: "https://www.linkedin.com/in/mitali-khare-41b420228/",
      },
      {
        image: "",
        name: "Vaidehi Khande",
        role: "Head, Marketing and Promotions",
        instagram: "https://www.instagram.com/_vaidehi26_/",
        linkedin: "https://www.linkedin.com/in/vaidehi-khande-014386274/",
      },
    ],
  },
  {
    department: "Cinematography",
    heads: [
      {
        image: "",
        name: "Hrishab Sharma",
        role: "Head, Cinematography",
        instagram: "https://www.instagram.com/hrishabh5216/",
        linkedin: "",
      },
    ],
  },
  {
    department: "Videography",
    heads: [
      {
        image: "",
        name: "Aagam Ji Jain",
        role: "Head, Videography",
        instagram: "https://www.instagram.com/aagamjee/",
        linkedin: "https://www.linkedin.com/in/aagam-ji-jain/",
      },
    ],
  },
  {
    department: "Executive Body",
    heads: [
      {
        image: "",
        name: "Amit More",
        role: "Executive Body Member",
        instagram: "https://www.instagram.com/itsamitmore/",
        linkedin: "https://www.linkedin.com/in/amit-more-62bb4826a/",
      },
      {
        image: "",
        name: "Divyanshi Sharma",
        role: "Executive Body Member",
        instagram: "https://www.instagram.com/divyanshiii__sharmaa/",
        linkedin: "https://www.linkedin.com/in/divyanshi--sharma/",
      },
      {
        image: "",
        name: "Divyanshu Jain",
        role: "Executive Body Member",
        instagram: "https://www.instagram.com/divyanshu._jain._/",
        linkedin: "https://www.linkedin.com/in/divyanshu-jain-1279a623a/",
      },
      {
        image: "https://res.cloudinary.com/deeqsba43/image/upload/w_500/q_auto/f_auto/v1696233359/gsph/kk4cgyuytwlzhodezt6t.jpg",
        name: "Kamlesh Pancholi",
        role: "Executive Body Member",
        instagram: "https://www.instagram.com/kamlesh_pancholi_92/",
        linkedin: "https://www.linkedin.com/in/kamlesh-pancholi-7a5a27224/",
      },
      {
        image: "",
        name: "Khushi Jain",
        role: "Executive Body Member",
        instagram: "https://www.instagram.com/khushi_jain.018/",
        linkedin: "https://www.linkedin.com/in/khushi-jain-918882232/",
      },
      {
        image: "",
        name: "Meet Jain",
        role: "Executive Body Member",
        instagram: "https://www.instagram.com/meetj.jain/",
        linkedin: "https://www.linkedin.com/in/meet-jain-88a56525b/",
      },
      {
        image: "",
        name: "Poorvi Shrivastav",
        role: "Executive Body Member",
        instagram: "https://www.instagram.com/poorvii11__/",
        linkedin: "https://www.linkedin.com/in/poorvishrivastava/",
      },
    ],
  },
  {
    department: "Coordinator",
    heads: [
      {
        image: "https://res.cloudinary.com/deeqsba43/image/upload/w_500/q_auto/f_auto/v1696233351/gsph/amem7r1h6vckxdysdca3.jpg",
        name: "Akshat Mishra",
        role: "Overall Coordinator",
        instagram: "https://www.instagram.com/akxt_1509/",
        linkedin: "https://www.linkedin.com/in/akshat-mishra-27769a276/",
      },
      {
        image: "",
        name: "Harsh Upadhyay",
        role: "Overall Coordinator",
        instagram: "https://www.instagram.com/harshupadhyay.13/",
        linkedin:
          "https://www.linkedin.com/in/harsh-vardhan-upadhyay-83192218b/",
      },
      {
        image: "",
        name: "Irfan Shekh",
        role: "Overall Coordinator",
        instagram: "https://www.instagram.com/irfan_1703_/",
        linkedin: "https://www.linkedin.com/in/irfan-shekh-698544204/",
      },
      {
        image: "https://res.cloudinary.com/deeqsba43/image/upload/w_500/q_auto/f_auto/v1696233353/gsph/b6lrrspwuuvuid4hjmin.jpg",
        name: "Jigyasa Barge",
        role: "Overall Coordinator",
        instagram: "https://www.instagram.com/jigyasa_barge/",
        linkedin: "https://www.linkedin.com/in/jigyasa-barge-b24187210/",
      },
      {
        image: "",
        name: "Ritisha Tatwade",
        role: "Overall Coordinator",
        instagram: "https://www.instagram.com/imritisha/",
        linkedin: "",
      },
      {
        image: "",
        name: "Shrishti Bhadoriya",
        role: "Overall Coordinator",
        instagram: "https://www.instagram.com/shrishti__282/",
        linkedin: "",
      },
      {
        image: "https://res.cloudinary.com/deeqsba43/image/upload/w_500/q_auto/f_auto/v1696233351/gsph/q2hrx2fijszbtnhkgvt2.jpg",
        name: "Swayam Gaba",
        role: "Overall Coordinator",
        instagram: "https://www.instagram.com/swayamgaba99/",
        linkedin: "https://www.linkedin.com/in/swayam-gaba-7b80ab20b/",
      },
    ],
  },
  {
    department: "Advisory Board",
    heads: [
      {
        image: "",
        name: "Kshitiz Saxena",
        role: "Advisory Board Member",
        instagram: "https://www.instagram.com/kshitizsaxenaaa/",
        linkedin: "https://www.linkedin.com/in/kshitiz-saxena-068968212/",
      },
      {
        image: "",
        name: "Shruti Chaturvedi",
        role: "Advisory Board Member",
        instagram: "https://www.instagram.com/__s.h.h.h.h__/",
        linkedin: "https://www.linkedin.com/in/shruti-chaturvedi-755230218/",
      },
      {
        image: "",
        name: "Shruti Kulshrestha",
        role: "Advisory Board Member",
        instagram: "https://www.instagram.com/_.shruttiii._/",
        linkedin:
          "https://www.linkedin.com/in/shruti-kulshreshtha-41b02a203/",
      },
    ],
  },
]

export default dep