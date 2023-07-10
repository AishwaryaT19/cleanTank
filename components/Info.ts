interface projectTypes {
  imgUrl: string;
  projectName: string;
  projectDesc: string;
}
//Overall Information - these values cannot be null
export const companyName = "Clean Tank"; //the name of the company
export const logo = "/assests/images/logo.png";
export const footerLogo = "/assests/images/footerLogo.png"; //logo of the company
interface infoTypes {
  inf: string;
  number: number;
  alternateNum: number;
  email: string;
  address: string;
}
export const infs: infoTypes[] = [
  {
    inf: "Our mission at CleanTank Services is simple: to provide high-quality services for our valued clients. Our team goes above and beyond to cater to each project's specific needs. Through open communication and exceptional service, we hope you'll find what you're looking for with our Business.", //short info for footer
    number: 9453517514,
    alternateNum: 8699339947, //phone number
    email: "admin@cleantankservices.com", //mail
    address: "B-3/17, Jamuna Apartments ,Chd-Kurali Hgwy, NH-5, Khanpur, Kharar, SAS Nagar 140 301 Punjab" //address of company - locatable on google maps
  }
];

export const projects: projectTypes[] = [
  {
    imgUrl: "/assests/images/projects/s1.mp4", //main project image - will be shown on projects page
    // year of the project
    projectName: "Step 1", //project name
    projectDesc:
      "We start thoroughly cleaning the main hole and surroundings which is usually full of dirt, mud and algae."
    //description of the project
  },
  {
    imgUrl: "/assests/images/projects/s2.mp4", //main project image - will be shown on projects page
    projectName: "Step 2", //project name
    projectDesc: "Removal of all stale water by using submersible pump."
    //description of the project
  },
  {
    imgUrl: "/assests/images/projects/s3.mp4", //main project image - will be shown on projects page
    projectName: "Step 3", //project name
    projectDesc:
      "The sludge which has settled on the floor of the tank is sucked out by using our sludge pump. This pump disposes off dirty sludge to any convenient and safe place outside the water tank. This type of sludge removal is a very tedious and laborious process if done manually, unbelievably but true." //description of the project
  },
  {
    imgUrl: "/assests/images/projects/s4.mp4", //main project image - will be shown on projects page
    projectName: "Step 4", //project name
    projectDesc:
      "We wash algae and dirt by using 100-120 bar rotary jet pressure machine. By using this machine we clean walls and ceiling of water tanks which dislodges the layers and layers of dirt and algae which stick on the wall and ceiling of the tank" //description of the project
  },
  {
    imgUrl: "/assests/images/projects/s5.mp4", //main project image - will be shown on projects page
    projectName: "Step 5", //project name
    projectDesc:
      "The floor of tank is thoroughly cleaned by high pressure jet  gun removing all the remaining dirt and algae. Remaining sludge is removed by using industrial vacuum cleaner making the tank absolutely dirt free." //description of the project
  },
  {
    imgUrl: "/assests/images/projects/s6.mp4", //main project image - will be shown on projects page
    projectName: "Step 6", //project name
    projectDesc:
      "The most important stage of antibacterial treatment is by using antibacterial spray by which walls and ceilings are made totally sterilize from bacteria attack.The antibacterial agent is thoroughly sprayed in all the nooks and corners of the tank ensure totally sterilization of tank." //description of the project
  },
  {
    imgUrl: "/assests/images/projects/s7.mp4", //main project image - will be shown on projects page
    projectName: "Step 7", //project name
    projectDesc:
      "Final sterilization and disinfection is done by using UV radiation which is used to deactivate any suspended or floating bacteria remaining in the tank." //description of the project
  }
];
export const processSubHead = "Clean it with Passion"; //heading for the projects on home page

//footer information
export const footer = "/assests/images/footer.jpg"; //image for footer
export const copyright = "Developed With 💖 in india By Hymns Of Web"; //copyright details
