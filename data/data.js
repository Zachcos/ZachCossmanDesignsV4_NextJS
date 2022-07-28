const featuredProjectData = [
  {
    "title": "Zach Cossman v4",
    "description": [
      "Version 4 of my personal acting site",
      "This fully-responsive layout uses CSS Grid for a unique and easily-collapsible layout. The intro animations are achieved with GSAP, and the menu interaction is acheived with the AnimateSharedLayout API from Framer Motion.",
      "I'm really happy with how this site turned out and feel like it is a bit \"louder,\" which is definitely more my style. "
    ],
    "slug": "zachcossmanv4",
    "liveUrl": "https://zachcossman.com/",
    "portImg": "/images/projects/zachcossmanv4/port_img.jpg",
    "nextProj": {
      "title": "Zach Cossman Designs v3",
      "slug": "/zachcossmandesignsv3"
    },
    "assets": [
      "../../images/projects/zachcossmanv4/img_1.jpg",
      "../../images/projects/zachcossmanv4/img_2.jpg",
      "../../images/projects/zachcossmanv4/img_3.jpg"
    ]
  },
  {
    "title": "Zach Cossman Designs v3",
    "description": [
      "The v3 redesign of Zach Cossman Designs was originally a static site where I managed all the portfolio items manually. Once I learned GatsbyJS, it was a no-brainer to covert the portfolio information into JSON data and allow the site to create the portfolio links by itself, as well as programatically create the full-page portfolio detail pages.",
      "Once the site was established, I did my best to integrate working page transitions with the React Spring library, but they unfortunately never functioned 100% properly. Once I discovered Framer Motion for page transitions, I began creating the current site you're on (Zach Cossman Designs v4!) and never saw the benefit of refactoring from React Spring to Framer Motion when the site was going to be taken offline anyways.",
      "ZCDv3 was also my first production site that utilized the Styled Components library, which is my go-to library for CSS-in-JS."
    ],
    "slug": "zachcossmandesignsv3",
    "liveUrl": "https://zachcossmandesigns.netlify.app",
    "portImg": "../../images/projects/zachcossmandesigns3/port_img.jpg",
    "nextProj": {
      "title": "Brooklyn Custom Shop",
      "slug": "/brooklyncustomshop"
    },
    "assets": [
      "../../images/projects/zachcossmandesigns3/img_1.jpg",
      "../../images/projects/zachcossmandesigns3/img_2.jpg"
    ]
  },
  {
    "title": "Brooklyn Custom Shop",
    "description": [
      "A fictional guitar site I built to learn about Flexbox, with the mobile menu as a first foray into more involved hover states.",
      "As with any guitar shop, it's Fenders and Martins only and only one guitar in the entire store isn't crazy expensive."
    ],
    "slug": "brooklyncustomshop",
    "liveUrl": "https://brooklyncustomshop.netlify.app/",
    "portImg": "/images/projects/brooklyncustomshop/port_img.jpg",
    "nextProj": {
      "title": "Zach Cossman v4",
      "slug": "/zachcossmanv4"
    },
    "assets": [
      "../../images/projects/brooklyncustomshop/img_1.jpg",
      "../../images/projects/brooklyncustomshop/img_2.jpg"
    ]
  }
]

const otherProjectData = [
  {
    "thumbImg": "../../images/other/behance_zachcossman.jpg",
    "behanceUrl": "https://www.behance.net/gallery/111232249/Zach-Cossman-site-design"
  },
  {
    "thumbImg": "../../images/other/behance_brandonkellycreative.jpg",
    "behanceUrl": "https://www.behance.net/gallery/110162489/Brandon-Kelly-Creative-site-design"
  },
  {
    "thumbImg": "../../images/other/behance_dorightconsultants.jpg",
    "behanceUrl": "https://www.behance.net/gallery/110163523/Do-Right-Consultants-site-design"
  },
  {
    "thumbImg": "../../images/other/behance_brooklyncustomshop.jpg",
    "behanceUrl": "https://www.behance.net/gallery/108861901/Brooklyn-Custom-Shop-site-design"
  },
  {
    "thumbImg": "../../images/other/behance_townsleygay.jpg",
    "behanceUrl": "https://www.behance.net/gallery/108862177/Townsley-Gay-custom-WP-Template"
  },
  {
    "thumbImg": "../../images/other/behance_zachcossmandesignsv3.jpg",
    "behanceUrl": "https://www.behance.net/gallery/108861963/ZachCossmanDesigns-v3"
  },
  {
    "thumbImg": "../../images/other/behance_ddmproductions.jpg",
    "behanceUrl": "https://www.behance.net/gallery/110162853/DDM-Productions-site-design"
  },
  {
    "thumbImg": "../../images/other/behance_broadwaycharitysongs.jpg",
    "behanceUrl": "https://www.behance.net/gallery/108862035/Broadway-Charity-Songs-site-design"
  },
  {
    "thumbImg": "../../images/other/behance_sheetswap.jpg",
    "behanceUrl": "https://www.behance.net/gallery/108862085/SheetSwap-site-design"
  },
  {
    "thumbImg": "../../images/other/behance_tunehound.jpg",
    "behanceUrl": "https://www.behance.net/gallery/108861257/TuneHound-Dashboard"
  },
  {
    "thumbImg": "../../images/other/behance_woodelfcollective.jpg",
    "behanceUrl": "https://www.behance.net/gallery/108861681/Woodelf-Collective-Branding"
  }
]

export {featuredProjectData, otherProjectData};