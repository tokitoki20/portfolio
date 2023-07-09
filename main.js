// let myDiv = document.createElement("div");
let myStyle = document.createElement("style")
myStyle.append(`
	.logo:before {
	content: "";
	background-color: #D0CFCB;
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 0%;
}
	`)

//=================================================================================================================================
// form

let myForm = document.createElement("form");
myForm.action = "https://formspree.io/f/mgejevjq";
myForm.method = "POST";

let myNameDiv = document.createElement("div")
	myNameDiv.classList.add("name-div")
let myNameSpan = document.createElement("span")
let myNameInput = document.createElement("input");
myNameInput.type = "text";
myNameInput.name = "name";
myNameInput.required = true;
myNameInput.placeholder = "Your Name";

let myEmailDiv = document.createElement("div")
	myEmailDiv.classList.add("email-div")
let myEmailSpan = document.createElement("span")
let myEmailInput = document.createElement("input");
myEmailInput.type = "email";
myEmailInput.name = "email";
myEmailInput.required = true;
myEmailInput.placeholder = "Your Email";

let myMsgDiv = document.createElement("div")
	myMsgDiv.classList.add("msg-div")
let myMsgSpan = document.createElement("span")
let myMsg = document.createElement("textarea");
myMsg.name = "message";
myMsg.placeholder = "Your Message";

let myButtonDiv = document.createElement("div")
let mySubmit = document.createElement("button");
let mySubmitSpan = document.createElement("span")
let myReset = document.createElement("button");
let myResetSpan = document.createElement("span")
mySubmit.type = "submit";
mySubmit.classList.add("submit");
myReset.type = "reset";
myReset.append(myResetSpan);
myReset.classList.add("reset");
myReset.append("Reset");
mySubmit.append(mySubmitSpan);
mySubmit.append("Submit");
myButtonDiv.append(mySubmit)
myButtonDiv.append(myReset)
  	let myPop = document.createElement("div")

  		myPop.classList.add("pop")

  	let myPopMessage = document.createElement("div")
  	let myPopTitle = document.createElement("div")
  		myPopTitle.classList.add('titleCard')
  	let myPopTitleSpan = document.createElement("span")
	let	mycheck = document.createElement("i")
		mycheck.classList.add("fa-sharp")
		mycheck.classList.add("fa-solid")
		mycheck.classList.add("fa-square-check")
	let myPessage = document.createElement("p")		
		myPessage.append("Your Message Has been Sent!")
	let myBmessage = document.createElement("button")
		myBmessage.append("Thank You")
		
				let mybimclick = document.createElement("img")
				let mybimclick2 = mybimclick.cloneNode(true)
			mybimclick.src = "img/pointer.png"
			mybimclick2.src = "img/pointer.png"
			mybimclick.style.cssText = "position:absolute; width:30px; right:100%; top:50%; transform:translate(-50%, -50%)"
			mybimclick2.style.cssText = "position:absolute; width:30px; left:100%; top:50%; transform:translate(50%, -50%) rotate(180deg)"
			myBmessage.append(mybimclick)
			myBmessage.append(mybimclick2)
			

  		myPopTitle.append(myPopTitleSpan)
  		myPopTitle.append("Message")
		myPopMessage.append(myPopTitle)
		myPopMessage.append(mycheck)
		myPopMessage.append(myPessage)
		myPopMessage.append(myBmessage)
		myPop.append(myPopMessage)
myForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission
  	document.body.append(myPop)
  	myPop.addEventListener("click",function(){
  		myPop.remove()
  	})
myBmessage.addEventListener("click",function(){
  		myPop.remove()
  	})








  // Retrieve form data
  const formData = new FormData(this);

  // Create a fetch request to send the form data
  fetch(this.action, {
    method: this.method,
    body: formData
  })
  .then(response => {
    if (response.ok) {
      // Form submission successful
      console.log('Form submitted successfully!');
      // Optionally reset the form
      this.reset();
    } else {
      // Form submission failed
      console.log('Form submission failed.');
    }
  })
  .catch(error => {
    // Error handling
    console.error('Error:', error);
    console.log('An error occurred. Please try again later.');
  });
});

myNameDiv.append(myNameSpan)
myNameDiv.append(myNameInput)
myEmailDiv.append(myEmailSpan);
myEmailDiv.append(myEmailInput);
myMsgDiv.append(myMsgSpan);
myMsgDiv.append(myMsg);
myForm.append(myNameDiv);
myForm.append(myEmailDiv);
myForm.append(myMsgDiv);
myForm.append(myButtonDiv);



//=================================================================================================================================










//=================================================================================================================================
//=================================================================================================================================

let myContent = document.createElement("div")
	myContent.classList.add("content")
let myContentMenuClicked = document.createElement("div")
let myMainSkills = document.createElement("div")

		let mySp2 = document.createElement("span")
			myMainSkills.classList.add("myMain-skill")
		let myMainsSkillsName = document.createElement("div")
		 myMainsSkillsName.classList.add("titleCard")
			myMainsSkillsName.append(mySp2)
			myMainsSkillsName.append("Main Skills")

		let skill1 = document.createElement("div")
		let skill1Title = document.createElement("p")
			skill1Title.append("Code")
		let skill2 = document.createElement("div")
		let skill2Title = document.createElement("p")
			skill2Title.append("Design")
		let skill3 = document.createElement("div")
		let skill3Title = document.createElement("p")
			skill3Title.append("Artist")
			skill1.classList.add("skilli")
			skill2.classList.add("skilli")
			skill3.classList.add("skilli")

		let mySkill1SpanDiv = document.createElement("div")
			mySkill1SpanDiv.classList.add("spanDiv")

		let mySkill2SpanDiv = document.createElement("div")
			mySkill2SpanDiv.classList.add("spanDiv")

		let mySkill3SpanDiv = document.createElement("div")
			mySkill3SpanDiv.classList.add("spanDiv")

			for( let i=0; i<= 4; i++) {
				let mySpan = document.createElement("span")
					mySpan.classList.add("span1")
				mySkill1SpanDiv.append(mySpan)
				let miniSpan = document.createElement("span")
				mySpan.append(miniSpan)
			}
			for( let i=0; i<= 4; i++) {
				let mySpan = document.createElement("span")
					mySpan.classList.add("span2")
				let miniSpan = document.createElement("span")
								mySpan.append(miniSpan)
				mySkill2SpanDiv.append(mySpan)
			}
			for( let i=0; i<= 4; i++) {
				let mySpan = document.createElement("span")
					mySpan.classList.add("span3")
				mySkill3SpanDiv.append(mySpan)
		let miniSpan = document.createElement("span")
										mySpan.append(miniSpan)
			}
		myMainSkills.append(myMainsSkillsName)		
		myMainSkills.append(skill1)		
		myMainSkills.append(skill2)		
		myMainSkills.append(skill3)
		skill1.append(skill1Title)		
		skill1.append(mySkill1SpanDiv)

		skill2.append(skill2Title)		
		skill2.append(mySkill2SpanDiv)		

		skill3.append(skill3Title)		
		skill3.append(mySkill3SpanDiv)



//=======================================================================================================================
	// prOJECT
	let myProjectContent = document.createElement("div")
					myProjectContent.classList.add("content")
				let myProjectList = document.createElement("div")
					myProjectList.classList.add("myProjectList") 

				let myProjectListMenuFather = document.createElement("div")
				let mySpn1 = document.createElement("span")
				let mySpn2 = document.createElement("span")
					myProjectListMenuFather.classList.add("myProjectListMenuFather")
				let myProjectListMenu = document.createElement("div")
					myProjectListMenu.classList.add("myProjectListMenu")

				let myUline = document.createElement("div")
					myUline.classList.add("line")
				
					let myProjectNameImg2 = document.createElement('img')
						myProjectNameImg2.src ="img/Pr.png"
						myProjectNameImg2.style.cssText ="z-index:100"
				document.addEventListener("mouseover",function (e) {
					if (e.target.classList.contains("myProjectName")){

						e.target.prepend(myProjectNameImg2)
					}else {
						myProjectNameImg2.remove()
					}
				})

				let projects = {
		"1": {
			name: "Portfolio",
			languages: ["HTML", "CSS", "JavaScript"], 
			description: "My portfolio website, you're probably looking at right now.",
			image : "img/logo-image.png"

		},
		// "2": {
		// 	name: "PortfGFolio",
		// 	languages: ["HTML", "CSS", "JavaScript"], 
		// 	description: "My portfolio website, you're probably looking at right now.",
		// 	image : "img/logo-image.png"

		// },
		// "3": {
		// 	name: "Portffolio",
		// 	languages: ["HTML", "CSS", "JavaScript"], 
		// 	description: "My portfolio website, you're probably looking at right now.",
		// 	image : "img/logo-image.png"

		// },
	}



	let Counterrr = 1;
		let myProjectNameImg3 = document.createElement('img')
			myProjectNameImg3.src ="img/Pr.png"


Object.keys(projects).forEach(function (el) {
	let myProjectName = document.createElement('div')
		myProjectName.classList.add("myProjectName")
	let myProjectNameImg = document.createElement('img')
		myProjectNameImg.src ="img/Pr2.png"




		myProjectName.append(myProjectNameImg)
		myProjectName.append(projects[Counterrr].name)
		myProjectListMenu.append(myProjectName)
		myProjectListMenuFather.append(myProjectListMenu)
		myProjectListMenuFather.append(mySpn1)
		myProjectListMenuFather.append(mySpn2)
	Counterrr++
})



		let myProjectInfo = document.createElement("div")
			myProjectInfo.classList.add("projectInfo")

document.addEventListener("click",function (e) {
		myProjectInfo.innerHTML = ""
		for(let i = 1; i <=Object.keys(projects).length; i++){


	if (e.target.textContent === projects[i].name) {
		let projectTitle = document.createElement("p")
			projectTitle.classList.add("titleCard")
		let projectTitlespan = document.createElement("span")
			projectTitle.append(projectTitlespan)
			projectTitle.append(e.target.textContent)


		let projectDivImage = document.createElement("div")
		let projectImage = document.createElement("img")
			projectImage.src = projects[i].image
			projectDivImage.append(projectImage)
		let projectDivLanguages = document.createElement("div")
			projectDivLanguages.classList.add("projectDivLanguages")
		projects[i].languages.forEach(function (el){
			let myLang = document.createElement("p");
				myLang.append(el)
				projectDivLanguages.append(myLang)		
		})

			let projectDescription = document.createElement("p")
				projectDescription.append(projects[i].description)

			myProjectInfo.append(projectTitle)
			myProjectInfo.append(projectDivImage)
			myProjectInfo.append(projectDivLanguages)
			myProjectInfo.append(projectDescription)
			myContent.append(myProjectInfo)
	}
		}
})

//=======================================================================================================================
let myExperience = document.createElement("div")

		let mySp1 = document.createElement("span")
			myExperience.classList.add("myExp")
		let myExperienceTitle = document.createElement("div")
		 myExperienceTitle.classList.add("titleCard")
			myExperienceTitle.append(mySp1)
			myExperienceTitle.append("Experience")
			let myError = document.createElement("div")
				myError.classList.add("myEr")
				myError.append("NO EXPERIENCE YET")
			let mySpDiv = document.createElement("div")
				mySpDiv.classList.add("mySpDiv")
			let mySpDiv1 = document.createElement("div")
				mySpDiv1.classList.add("mySpDiv")	
				for (let i=0; i<2; i++){
					let mySpan = document.createElement("span")
					mySpDiv.append(mySpan)
				}
				for (let i=0; i<2; i++){
					let mySpan = document.createElement("span")
					mySpDiv1.append(mySpan)
				}
						myExperience.append(myExperienceTitle)
						myExperience.append(mySpDiv1)
						myExperience.append(myError)
						myExperience.append(mySpDiv)

//=======================================================================================================================
//=======================================================================================================================
let myEducation = document.createElement("div")
			myEducation.classList.add("myEdu")
		let myEducationTitle = document.createElement("div")
		let mySp = document.createElement("span")
		let mySpmini = mySp.cloneNode(true)
		 myEducationTitle.classList.add("titleCard")
			myEducationTitle.append(mySp)
			myEducationTitle.append("Education")
			let myDivImagef = document.createElement("div")
				myDivImagef.classList.add("imof")
			let myDivImage = document.createElement("div")
			    myDivImage.classList.add("imo")
			let myDivIm = document.createElement("img")
				myDivIm.classList.add("epag") 

				myDivIm.src = "img/epag.png"
			let myDescrip = document.createElement("div")
				myDescrip.classList.add("myDescription")
			let year = document.createElement("p")
				year.append(mySpmini)
				year.append("2020-2022")
			let schoolName = document.createElement("p")
				schoolName.append("[Ecole Professionnelle d'audiovisuel et de graphisme]")
			let degree = document.createElement("p")
				degree.append("Diplôme de Technicien Spécialisé en Developpement Multimedia")

				myDivImagef.append(myDivImage)
				myDivImage.append(myDivIm)
				myDescrip.append(schoolName)
				myDescrip.append(degree)
				myDescrip.append(year)
				myEducation.append(myEducationTitle)
				myEducation.append(myDivImagef)
				myEducation.append(myDescrip)

//=======================================================================================================================
//=======================================================================================================================
	let myFrontEnd = document.createElement("div")
		myFrontEnd.classList.add("front-end")
		let myFrontEndTitle = document.createElement("div")
		let mySp3 = document.createElement("span")
		 myFrontEndTitle.classList.add("titleCard")
			myFrontEndTitle.append(mySp3)
			myFrontEndTitle.append("Front End")
			myFrontEnd.append(myFrontEndTitle)

 let frontEndSkills = ["HTML","CSS","JAVASCRIPT","Bootstrap","React Js"]
 	frontEndSkills.forEach(function (el) {
		let skillend = document.createElement("div")
		let skillTitleend = document.createElement("p")
			skillTitleend.append(el)
			skillend.classList.add("skilli")
		let mySkill1SpanDivend = document.createElement("div")
			mySkill1SpanDivend.classList.add("spanDiv")
		for( let i=0; i<= 4; i++) {
				let mySpan = document.createElement("span")
					mySpan.classList.add("span1")
				mySkill1SpanDivend.append(mySpan)
				let miniSpan = document.createElement("span")
				mySpan.append(miniSpan)
			}
			skillend.append(skillTitleend)
			skillend.append(mySkill1SpanDivend)
					myFrontEnd.append(skillend)

 		
 	})
//==========================================================================================================================
//==========================================================================================================================

	let myBackEnd = document.createElement("div")
		myBackEnd.classList.add("back-end")
		let myBackEndTitle = document.createElement("div")
		let mySp4 = document.createElement("span")
		 myBackEndTitle.classList.add("titleCard")
			myBackEndTitle.append(mySp4)
			myBackEndTitle.append("Back End")
			myBackEnd.append(myBackEndTitle)

			 let backEndSkills = ["PHP","MYSQL","mongoDB","Node js"]
 	backEndSkills.forEach(function (el) {
		let skillend = document.createElement("div")
		let skillTitleend = document.createElement("p")
			skillTitleend.append(el)
			skillend.classList.add("skilli")
		let mySkill1SpanDivend = document.createElement("div")
			mySkill1SpanDivend.classList.add("spanDiv")
		for( let i=0; i<= 4; i++) {
				let mySpan = document.createElement("span")
					mySpan.classList.add("span1")
				mySkill1SpanDivend.append(mySpan)
				let miniSpan = document.createElement("span")
				mySpan.append(miniSpan)
			}
			skillend.append(skillTitleend)
			skillend.append(mySkill1SpanDivend)
					myBackEnd.append(skillend)

 		
 	})


 			let myArtist = document.createElement("div")
		myArtist.classList.add("artist")
		let myArtistTitle = document.createElement("div")
		let mySp5 = document.createElement("span")
		 myArtistTitle.classList.add("titleCard")
			myArtistTitle.append(mySp5)
			myArtistTitle.append("Artist")
			myArtist.append(myArtistTitle)


			 let myArtistSkills = ["Character Design","Concept Artist","3D Modeler [Architecture] ","Illustrator", "Portrait Artist", "Storyboard Artist", "Manga-Comic Artist", "Creature Design"]
 	myArtistSkills.forEach(function (el) {
		let skillend = document.createElement("div")
		let skillTitleend = document.createElement("p")
			skillTitleend.append(el)
			skillend.classList.add("skilli")
		let mySkill1SpanDivend = document.createElement("div")
			mySkill1SpanDivend.classList.add("spanDiv")
		for( let i=0; i<= 4; i++) {
				let mySpan = document.createElement("span")
					mySpan.classList.add("span1")
				mySkill1SpanDivend.append(mySpan)
				let miniSpan = document.createElement("span")
				mySpan.append(miniSpan)
			}
			skillend.append(skillTitleend)
			skillend.append(mySkill1SpanDivend)
					myArtist.append(skillend)

 		
 	})


//=================================================================================================================================
//=================================================================================================================================
// Project


//=================================================================================================================================
//=================================================================================================================================

// 		let skill1back = document.createElement("div")
// 		let skill1Titleback = document.createElement("p")
// 			skill1Titleback.append("PHP")
// 		skill1back.classList.add("skilli")

// 		let mySkill1SpanDivback = document.createElement("div")
// 			mySkill1SpanDivback.classList.add("spanDiv")
// for( let i=0; i<= 4; i++) {
// 				let mySpan = document.createElement("span")
// 					mySpan.classList.add("span1")
// 				mySkill1SpanDivback.append(mySpan)
// 				let miniSpan = document.createElement("span")
// 				mySpan.append(miniSpan)
// 			}
// 			skill1back.append(skill1Titleback)
// 			skill1back.append(mySkill1SpanDivback)



// 			let skill2back = document.createElement("div")
// 		let skill2Titleback = document.createElement("p")
// 			skill2Titleback.append("MYSQL")
// 		skill2back.classList.add("skilli")

// 		let mySkill2SpanDivback = document.createElement("div")
// 			mySkill2SpanDivback.classList.add("spanDiv")
// for( let i=0; i<= 4; i++) {
// 				let mySpan = document.createElement("span")
// 					mySpan.classList.add("span1")
// 				mySkill2SpanDivback.append(mySpan)
// 				let miniSpan = document.createElement("span")
// 				mySpan.append(miniSpan)
// 			}
// 			skill2back.append(skill2Titleback)
// 			skill2back.append(mySkill2SpanDivback)



// 			let skill3back = document.createElement("div")
// 		let skill3Titleend = document.createElement("p")
// 			skill3Titleend.append("JavaScript")
// 		skill3back.classList.add("skilli")

// 		let mySkill3SpanDivend = document.createElement("div")
// 			mySkill3SpanDivend.classList.add("spanDiv")
// for( let i=0; i<= 4; i++) {
// 				let mySpan = document.createElement("span")
// 					mySpan.classList.add("span1")
// 				mySkill3SpanDivend.append(mySpan)
// 				let miniSpan = document.createElement("span")
// 				mySpan.append(miniSpan)
// 			}
// 			skill3back.append(skill3Titleend)
// 			skill3back.append(mySkill3SpanDivend)

		// myBackEnd.append(skill1back)
		// myBackEnd.append(skill2back)
		// myBackEnd.append(skill3back)










// let htmlDiv = document.createElement("div")
// let cssDiv = document.createElement("div")
// let htmlDivtitle = document.createElement("div")
// let cssDivtitle = document.createElement("div")
// let htmlDivtitlespan = document.createElement("span")
// let cssDivtitlespan = document.createElement("span")
// 	htmlDivtitle.classList.add("titleCard")
// 	cssDivtitle.classList.add("titleCard")
// 	htmlDivtitle.append(htmlDivtitlespan)
// 	cssDivtitle.append(htmlDivtitlespan)
// 	htmlDivtitle.append("What i know")
// 	cssDivtitle.append("What i know")
// 	htmlDiv.append(htmlDivtitle)
// 	cssDiv.append(cssDivtitle)
// let ddiv = document.createElement("div")
// let d1div = document.createElement("div")
// 	d1div.classList.add("d1")
// let d2div = document.createElement("div")
// 	d2div.classList.add("d2")
// let d2divSpan1 = document.createElement("div")
// let d2divSpan2 = document.createElement("div")
// let d2divSpan3 = document.createElement("div")
// 	d2div.append(d2divSpan1)
// 	d2div.append(d2divSpan2)
// 	d2div.append(d2divSpan3)
// let d3div = document.createElement("div")
// 	d3div.classList.add("d3")
// 	ddiv.append(d1div)
// 	ddiv.append(d2div)
// 	ddiv.append(d3div)

// 	htmlDiv.classList.add("SkillNews")
// 	cssDiv.classList.add("SkillNews")
// let bigDaddy = document.createElement("div")
// 	bigDaddy.classList.add("bigDaddy")


// let bigDaddy1 = document.createElement("div")
// 	bigDaddy1.classList.add("bigDaddy")
// let htmlStudies = ["Semantic HTML", "Heading and Sections","Attributes","links","tables","Forms","Images","Audio and Video"] 
// let cssStudies = ["Selectors", "Styling Methods","Box Model","Layout","Responsive Design","CSS Transitions and Animations"] 
// 	htmlStudies.forEach(function (el) {
// 		let myDiv = document.createElement("div")
// 		myDiv.classList.add("deso")
// 			let myimclick = document.createElement("img")
// 				myimclick.src = "img/pointer-click.png"
// 			// myimclick.style.cssText = "position:absolute; width:30px; right:100%; top:50%; transform:translate(-50%, -50%)"
// 		let myP = document.createElement("p")
// 			myP.append(el)
// 			myDiv.append(myimclick)
// 			myDiv.append(myP)
// 			bigDaddy.append(myDiv)
// 	})
			
// 	cssStudies.forEach(function (el) {
// 		let myDiv = document.createElement("div")
// 		myDiv.classList.add("deso")
// 			let myimclick = document.createElement("img")
// 				myimclick.src = "img/pointer-click.png"
// 			// myimclick.style.cssText = "position:absolute; width:30px; right:100%; top:50%; transform:translate(-50%, -50%)"
// 		let myP = document.createElement("p")
// 			myP.append(el)
// 			myDiv.append(myimclick)
// 			myDiv.append(myP)
// 			bigDaddy1.append(myDiv)
// 	})
			

//=======================================================================================================================
//=======================================================================================================================

let myim = document.createElement("img")
let myimclick = document.createElement("img")
			myim.src = "img/pointer.png"
			myim.style.cssText = "position:absolute; width:30px; right:100%; top:50%; transform:translate(-50%, -50%)"
			myimclick.src = "img/pointer-click.png"
			myimclick.style.cssText = "position:absolute; width:30px; right:100%; top:50%; transform:translate(-50%, -50%)"
let myimclick2 = myimclick.cloneNode(true)
let myimclick3 = myimclick.cloneNode(true)

// let myText = "WElcome"
let myCount = 0
let myCount1 = 0
let myCount2 = 0
let myCount3 = 0
// ========================================================================================
	let myBigCircle = document.createElement("div")
	let myBigCircle3 = document.createElement("div")
	let insidemyBigCircle = document.createElement("div")
	let line = document.createElement("div")
	let line2 = document.createElement("div")
	
	let insidemyBigCircle2 = document.createElement("div")
	let line3 = document.createElement("div")
	let line4 = document.createElement("div")
	
	myBigCircle.append(insidemyBigCircle)
	myBigCircle.append(line)
	myBigCircle.append(line2)
	myBigCircle3.append(insidemyBigCircle2)
	myBigCircle3.append(line3)
	myBigCircle3.append(line4)
// ========================================================================================

	let myBigCircle2 = document.createElement("img")

let width = 0
let myImg = ["bg_block01.png","bg_block01_bk.png","bg_block02.png","bg_block02_bk.png","bg_block03.png","bg_block03_bk.png","bg_block04.png","bg_block04_bk.png","bg_block05.png","bg_block05_bk.png","bg_block06.png","bg_block06_bk.png","bg_block07.png","bg_block07_bk.png","bg_noise04.png"]
let myDivDad = document.createElement("div")
	myDivDad.style.cssText ="position:absolute; width100vw;height:100vh;left:0;top:0;z-index:1"
	document.body.append(myDivDad)


document.body.classList.add("loading")
if (document.body.classList.contains("loading")) {
		
			document.body.children[2].remove()
	
document.body.style.setProperty("background-color","#1E1A17")
document.body.style.setProperty("display","flex")
document.body.style.setProperty("justify-content","center")
document.body.style.setProperty("align-items","center")
document.body.style.setProperty("flex-direction","column")

let myLogo = document.createElement("div")
document.body.append(myLogo)

document.head.append(myStyle)


myLogo.classList.add("logo");
myLogo.style.cssText =`margin: 0;padding: 0;z-index:767;width: calc(350px / 2);height: calc(415px / 2);background-color: #35312E;transition:1s; -webkit-mask: url("img/logo.png");-webkit-mask-size: 100%;position: relative;`


let myDivVertical = document.createElement("div")
myDivVertical.style.cssText = "display:flex; width:100%; justify-content:space-between;height:100%; position:absolute; z-index:1"
for (let i =0; i<=104; i++) {
let mySpan = document.createElement("span")
myDivVertical.append(mySpan)
	mySpan.style.cssText = "height:100%;opacity: .2;FILTER:blur(2px); width:1px; background-color: #0B0704"
}
document.body.append(myDivVertical)

let myDivHorizontal = document.createElement("div")
myDivHorizontal.style.cssText = "display:flex; flex-direction:column; justify-content:space-between; width:100%; height:100%; position:absolute; z-index: 2;"

for (let i = 0; i<=74; i++) {
	let mySpan = document.createElement("span")
	myDivHorizontal.append(mySpan)
	mySpan.style.cssText = "width:100%;opacity: .2; FILTER:blur(2px);background-color: #0B0704; height:1px"
}

document.body.append(myDivHorizontal)

let myUnderTextPara = "Click on button to access"
// myUnderText.append(myUnderTextPara)
// myUnderText.style.cssText = "position:relative; z-index:378; color:#35312e;text-shadow: 1px 0px 1px #9f565f, -1px 0px 1px #A4DACA; margin-top: 40px; font-weight: 700;"


let  myTalkDiv = document.createElement("div")
myTalkDiv.style.cssText = "display:flex; opacity:0;transition:2s; flex-direction:column; JUSTIFY-CONTENT: space-between; align-self: flex-end;position: absolute; bottom: 0;width: 100vw;height: 35vh;"
let myName = document.createElement("p")
myName.classList.add("name")
myName.append("2B")
myName.style.cssText = "position:relative;width:20%; padding:10px; color:#D1CECB;background-color:#181613; display:flex; justify-content:flex-end;"
let myTalkText = document.createElement("p")
let myTalkTextimg = document.createElement("img")
let myTalkTextimg2 = document.createElement("img")
let myTalkTextimg3 = document.createElement("img")
myTalkTextimg3.classList.add("up-to-down")
myTalkText.append(myTalkTextimg)
myTalkText.append(myTalkTextimg2)
myTalkText.append(myTalkTextimg3)
myTalkTextimg.src = "img/c-design.png"
myTalkTextimg2.src = "img/c-design.png"
myTalkTextimg3.src = "img/logo2.png"
myTalkTextimg.style.cssText = "position: absolute;    bottom: 7%; left: -9%; width: 390px; TRANSFORM: rotate(25deg);"
myTalkTextimg2.style.cssText = "position: absolute;    top: 7%; right: -9%; width: 390px; TRANSFORM: rotate(200deg);"
myTalkTextimg3.style.cssText = "position: absolute; MARGIN-TOP: 45px; right: 3%; width: 50px; animation-name: uptodown;  animation-duration: .5s;  animation-iteration-count: infinite;"

myTalkText.style.cssText = "position:relative;overflow:hidden; height: 60%; padding:10px; color:#D1CECB;background-color:#181613; display:flex;align-items:center;    justify-content: center;"

myTalkDiv.append(myName)
myTalkDiv.append(myTalkText)
document.body.append(myTalkDiv)


setTimeout(function() {
	myTalkDiv.style.setProperty("opacity","1")
	function appending() {
	myTalkText.append(myUnderTextPara[myCount])
	myCount++
	if (myCount >= myUnderTextPara.length) {
		clearInterval(myAppending)
	}
}
let myAppending = setInterval(appending, 50)

},2500)



function toup() {

	if (myCount >= 100){
		myLogo.style.setProperty("opacity", "0")
		myTalkDiv.style.setProperty("opacity", "0")
		document.body.classList.remove("loading")
		document.body.classList.add("loading2")

		setTimeout(function(){

			myLogo.remove()
			myTalkDiv.remove()

		},2000)

	}

			myStyle.append(`
	.logo:before {
	content: "";
	background-color: #D0CFCB;
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: ${myCount}%;
}
	`)		
	myCount++
}

// let toupup = setInterval(toup,10)



myLogo.addEventListener("click", function(){

let toupup = setInterval(toup,10)
// setTimeout(function(){
// 	document.body.style.removeProperty("justify-content")
// },2500)


let myLoadingDiv = document.createElement("div")
	myLoadingDiv.classList.add("hello")
	myLoadingDiv.style.cssText = "padding: 20px; opacity:0 ;transition: all 2s ease 0s;display: grid;grid-template-columns: 90% 10%;width: 100%;"
	let myDivCircleuno = document.createElement("div")
	myDivCircleuno.style.cssText = "grid-area: 1 / 2 / 2 / 3;width: 50PX;height: 50px;position: relative;display: flex;box-shadow: rgba(244, 67, 54, 0.69) -2px 1px 5px 1px, rgb(56, 203, 193) -3px 4px 9px 0px inset;border-radius: 50%;background-color: rgb(203, 198, 175);"
	let myDivCircletwo = document.createElement("div")
	myDivCircletwo.style.cssText = "animation-timing-function: linear; animation-name: rotate; animation-duration: 0.5s; animation-iteration-count: infinite; width: 80%; position: absolute; left: 50%; top: 50%; height: 80%; border-radius: 50%; border: 2px solid rgb(134, 120, 99);"
	let myDivCirclethree = document.createElement("div")
	myDivCirclethree.style.cssText = "width: 80%;POSITION: ABSOLUTE;left: 50%;TOP: 50%;transform: translateX(-50%) translateY(-50%) rotate(341deg);box-shadow: -2px 0px 8px 3px #ff00004f;HEIGHT: 80%;border-radius: 50%;border-color: transparent transparent transparent #867863;border-width: 3px;border-style: solid;"
	let myDivCirclefour = document.createElement("div")
	myDivCirclefour.style.cssText = "width: 50%;POSITION: ABSOLUTE;left: 50%;TOP: 50%;transform: translate(-50%, -50%);HEIGHT: 50%;border-radius: 50%;border: 2px solid #867863;"
	

	let myLoadingDivText = document.createElement("div");
	myLoadingDivText.style.cssText = "text-shadow: rgba(244, 67, 54, 0.69) 5px 1px 3px, rgb(56, 203, 193) -1px 1px 3px; padding: 10px;display: flex;WIDTH: 100%;color: white; grid-area: 1 / 1 / 1 / 2;     display: flex;flex-direction: column;"
	let myLoadingDivHeader = document.createElement("div")
	myLoadingDivHeader.style.cssText = "opacity:0;transition: 1s; margin-bottom: 55px;"
	let myLoading = document.createElement("span");
	myLoading.style.cssText = "font-size: 40px;font-weight: 500; letter-spacing: 4px"
	let myLoading2 = document.createElement("span")
	myLoading2.style.cssText = "font-size: 20px; letter-spacing: 4px; font-weight: 400;"
	myLoading2.append("CHEKING SYSTEM")
	myLoading.append("LOADING.")
	myLoadingDivText.append(myLoadingDivHeader)
	myLoadingDivHeader.append(myLoading)
	myLoadingDivHeader.append(myLoading2)

	let myDivOfSecondLoadingText = document.createElement("div")
	myDivOfSecondLoadingText.style.cssText ="display:flex; flex-direction:column; margin-left: 20px; font-size:12px"
	myLoadingDivText.append(myDivOfSecondLoadingText)
	myDivOfSecondLoadingText.classList.add("p-of-div")
	let myDiv2Paragraph1 =document.createElement("p")

	let myDiv2Paragraph2 =document.createElement("p")

	let myDiv2Paragraph3 =document.createElement("p")
		
	let myDiv2Paragraph4 =document.createElement("p")

		myDiv2Paragraph4.append("System Check Complete")
		myDiv2Paragraph4.style.setProperty("opacity","0")
		myDiv2Paragraph4.style.setProperty("transition","1s")
	 let myDiv2Paragraph1Text = "Vitals Green"
	 let myDiv2Paragraph2Text = "Black Box Temperature: Normal"
	 let myDiv2Paragraph3Text = "Remaining Energy: 100%"

	 

	myDivOfSecondLoadingText.append(myDiv2Paragraph1)
	myDivOfSecondLoadingText.append(myDiv2Paragraph2)
	myDivOfSecondLoadingText.append(myDiv2Paragraph3)
	myDivOfSecondLoadingText.append(myDiv2Paragraph4)

setTimeout(function(){
			if (document.body.classList.contains("loading2")) {
	document.body.append(myLoadingDiv)
	
	myLoadingDiv.append(myDivCircleuno)
	myLoadingDiv.append(myLoadingDivText)
	myDivCircleuno.append(myDivCircletwo)
	myDivCircletwo.append(myDivCirclethree)
	myDivCirclethree.append(myDivCirclefour)
	

}

setTimeout(function(){
	let characters ='Vitals Green';
let result = '';

let myCoun = 0
function appendText() {
	let charactersLength = characters.length;
	 
	 result = characters.charAt(Math.floor(Math.random() * charactersLength));

	 myDiv2Paragraph1.append(result);

	 if (result !== myDiv2Paragraph1Text[myCoun]) {
		
	 setTimeout(function(){
	 	myDiv2Paragraph1.textContent = myDiv2Paragraph1.textContent.slice(0, myDiv2Paragraph1.textContent.length - 1)
	 }, 1)


	 }else {
	 	myCoun++
	  

	 }
	
	
	if (myCoun >= myDiv2Paragraph1Text.length) {
		clearInterval(addingText)
	}
		
}
let addingText = setInterval(appendText ,5)


},6000)


setTimeout(function(){
	let characters ='Black Box Temperature: Normal';
let result = '';

let myCoun = 0
function appendText() {
myDiv2Paragraph2.append(myDiv2Paragraph2Text[myCoun]);

	 myCoun++
	
	
	if (myCoun >= myDiv2Paragraph2Text.length) {
		clearInterval(addingText)
	}		
}
let addingText = setInterval(appendText ,4)


},9000)

setTimeout(function(){
		let myCoun = 0
function appendText() {
	

	 myDiv2Paragraph3.append(myDiv2Paragraph3Text[myCoun]);

	 myCoun++
	
	
	if (myCoun >= myDiv2Paragraph3Text.length) {
		clearInterval(addingText)
	}
		
}
let addingText = setInterval(appendText ,5)


},12000)	

setTimeout(function(){
			myDiv2Paragraph4.style.setProperty("opacity","1")

},14000)



setTimeout(function(){
	myLoadingDiv.style.setProperty("opacity","1")
} ,3000)

setTimeout(function(){
	myLoadingDivHeader.style.setProperty("opacity","1")
} ,3000)


},3500)

setTimeout(function(){
	let myClasses = ["uno","dos","tres","quatro","cinqo","six","seven","eight"];
for(let i=0; i<=8; i++){
	let myHr = document.createElement("hr")
	myHr.classList.add(myClasses[i])
	document.body.append(myHr)
}


function toMaxWidth() {


	document.querySelector(".uno").style.setProperty("width", `${width}%`)
	document.querySelector(".dos").style.setProperty("width", `${width}%`)
	document.querySelector(".tres").style.setProperty("width", `${width}%`)
	document.querySelector(".quatro").style.setProperty("width", `${width}%`)
	document.querySelector(".cinqo").style.setProperty("width", `${width}%`)
	document.querySelector(".six").style.setProperty("width", `${width}%`)
	document.querySelector(".seven").style.setProperty("width", `${width}%`)
	document.querySelector(".eight").style.setProperty("width", `${width}%`)
	if (width === 100){
		clearInterval(tomax)
	}
	width++;
}


let tomax = setInterval(toMaxWidth,1)

},18000)




setTimeout(function(){

	function images() {
if (myCount1 === myImg.length - 1) {
	document.body.classList.remove("loading2")

	document.body.style.setProperty("background-color","#CBC6AF")
	


	setTimeout(function () {
		
	document.body.classList.add("start-menu")
	},3000)
	clearInterval(myIn)
}
	
let myImge = document.createElement("div")

	myImge.style.cssText = `background-color: #CBC6AF;-webkit-mask: url("img/${myImg[myCount1]}");-webkit-mask-size: 100%;position:absolute; width:100vw; height:100vh;`
	document.body.append(myImge)
	myCount1++

}

let myIn = setInterval(images,10)

},24000)

//
})


}

//===========================================================================
//===========================================================================
// StartMenu

function startMenu() {
	
if (document.body.classList.contains("start-menu")) {
	document.body.style.cssText = `background-color: #CBC6AF; flex-direction:column;	height: 100vh;	z-index: -1;	position: relative;	display: flex;	align-items: center;overflow: hidden;	width: 100vw;`
	document.body.innerHTML = `	<div id="main" class="main ">
		<h3 id="title"></h3>
	</div>
			

<script type="text/javascript" src="main.js"></script>	`
//========================================================================================
// had code dyal body f start menu kaykon fih darkness f side 

let myDarkBorder = document.createElement("div");
	myDarkBorder.classList.add("darkSides")
	myDarkBorder.style.cssText = "position: absolute;z-index:30;    width: 100vw;OPACITY: .51;    height: 100vh;background:linear-gradient(to right, #1E1A17 -25%,  transparent 25%, transparent 75%, #1E1A17 125% )"
document.body.append(myDarkBorder)


//========================================================================================	
//========================================================================================	




//========================================================================================	
//========================================================================================	
//grid design
let myDivVertical = document.createElement("div")
myDivVertical.style.cssText = "opacity: .2;FILTER:blur(2px);display:flex; width:100%; justify-content:space-between;height:100%; position:absolute; z-index:1"
for (let i =0; i<=104; i++) {
let mySpan = document.createElement("span")
myDivVertical.append(mySpan)
	mySpan.style.cssText = "height:100%; width:1px; background-color: #0B0704"
}
document.body.append(myDivVertical)

let myDivHorizontal = document.createElement("div")
myDivHorizontal.style.cssText = "opacity: .2;FILTER:blur(2px);display:flex; flex-direction:column; justify-content:space-between; width:100%; height:100%; position:absolute; z-index: 2;"

for (let i = 0; i<=74; i++) {
	let mySpan = document.createElement("span")
	myDivHorizontal.append(mySpan)
	mySpan.style.cssText = "width:100%;background-color: #0B0704; height:1px"
}

document.body.append(myDivHorizontal)

//========================================================================================	
//========================================================================================








//========================================================================================	
//========================================================================================	
//had code dyal line li fih div , fo9 dyalo kayn line to left o t7to kayn line kayn to right

let myMain = document.getElementById("main");
let myMainChild1 = document.createElement("div")
myMain.append(myMainChild1)

			let myTopMenu = document.createElement("div")
						myTopMenu.style.cssText = "padding-left:40px;height: 50px; width:100%;position:relative; z-index:100;display:flex;align-items:center;"

			document.body.prepend(myTopMenu)

myMainChild1.style.cssText = "display:flex; justify-content: space-around; position:absolute; top:0;right:0; width:0%;height:1px; background-color: #565448; z-index:7843743"

myMainChild2 = myMainChild1.cloneNode(true)

myMainChild2.style.setProperty("left","0")
myMainChild2.style.setProperty("bottom","0")
myMainChild2.style.removeProperty("right")
myMainChild2.style.removeProperty("top")
myMain.append(myMainChild2)

function counter() {
	if (myCount1 >= 100) {
		clearInterval(myWidthFull)
	}
	myMainChild1.style.setProperty("width", `${myCount1}%`)
	myMainChild2.style.setProperty("width", `${myCount1}%`)
	myCount1++
}
let myWidthFull = setInterval(counter, 15)


for (let i=0; i<=24; i++){
let mySmallSquare = document.createElement("span")
let myImgSquare = document.createElement("img")
let myImgSquare2 = document.createElement("img")
myImgSquare.src="/img/decor.png"
myImgSquare2.src="/img/decor.png"
myImgSquare.style.cssText = "opacity:0; height: calc(18px / 1.3); width:calc(22px / 1.3); margin-top: 5px;transition: .3s"
myImgSquare2.style.cssText = "opacity:0; height: calc(18px / 1.3); width:calc(22px / 1.3); margin-top: 5px;transition: .3s"
mySmallSquare.style.cssText = "opacity:0; height:3px; width:5px; background-color: #565448; transition: .3s"

let mySmallSquare2 = mySmallSquare.cloneNode(true)
myMainChild1.append(mySmallSquare);
myMainChild1.append(myImgSquare);
myMainChild2.append(mySmallSquare2)
myMainChild2.append(myImgSquare2)


setTimeout(function(){

myImgSquare.style.setProperty("opacity","1")
myImgSquare2.style.setProperty("opacity","1")
mySmallSquare.style.setProperty("opacity","1")
mySmallSquare2.style.setProperty("opacity","1")
}, 5000)

}

// =========================================================================================
// =========================================================================================







// =========================================================================================
// =========================================================================================
// code dyal circle li kaykoun ka design f body f start menu wa7d top left o wa7d f bottom right
setTimeout(function(){
	myBigCircle.style.cssText ="transition: all 1s ease 0s;  transform: translate(-50%, -40%) rotate(45deg);    opacity: 0;    position: absolute;    width: 500px;    height: 500px;    border: 1px solid #1E1A17;    border-radius: 50%;    display: flex;    left: 0;    z-index: 2;    top: 0;    justify-content: center;align-items: center;"
	myBigCircle3.style.cssText ="transition: all 1s ease 0s;  transform: translate(50%, 40%) rotate(45deg);    opacity: 0;    position: absolute;    width: 500px;    height: 500px;    border: 1px solid #1E1A17;    border-radius: 50%;    display: flex;    right: 0;    z-index: 2;    bottom: 0;    justify-content: center;align-items: center;"
	insidemyBigCircle.style.cssText =" WIDTH: 95%;    position: absolute;    height: 95%;display:flex; justify-content:center; align-items:center; border: 1px solid #1E1A17; border-radius: 50%;"
	insidemyBigCircle2.style.cssText =" WIDTH: 95%;    position: absolute;    height: 95%;display:flex; justify-content:center; align-items:center; border: 1px solid #1E1A17; border-radius: 50%;"
	line.style.cssText ="    HEIGHT: 1px;    margin-bottom: 60px;    width: 1500px;    background-color: #1E1A17;position: absolute;"
	line2.style.cssText = "    height: 1px;    width: 1500px;    background-color: #1E1A17;    position: absolute;"
	line3.style.cssText ="    HEIGHT: 1px;    margin-bottom: 60px;    width: 1500px;    background-color: #1E1A17;position: absolute;"
	line4.style.cssText = "    height: 1px;    width: 1500px;    background-color: #1E1A17;    position: absolute;"
	
	document.body.append(myBigCircle)
	document.body.append(myBigCircle3)

},1000)

// code dyal circle mn b3d opacity katbdl
setTimeout(function() {
	myBigCircle.style.setProperty("opacity",".2")
	myBigCircle3.style.setProperty("opacity",".2")
},2000)
// =========================================================================================
// =========================================================================================






// =========================================================================================
// =========================================================================================

// code dyal Start menu katktb b7al by keyboard


let characters ='START MENU';
let result = '';

let myTitle = document.getElementById("title")
let myTextTitle = "START MENU"
let myCoun = 0
function appendText() {

	let charactersLength = characters.length;
	 
	 result = characters.charAt(Math.floor(Math.random() * charactersLength));

	 myTitle.append(result);

	 if (result !== myTextTitle[myCoun]) {
		
	 setTimeout(function(){
	 	myTitle.textContent = myTitle.textContent.slice(0, myTitle.textContent.length - 1)
	 }, 1)


	 }else {
	 	myCoun++
	  

	 }
	
	
	if (myCoun >= myTextTitle.length) {
		clearInterval(addingText)
	}
		
}
let addingText = setInterval(appendText ,7)

// =========================================================================================
// =========================================================================================

// =========================================================================================
// =========================================================================================
	// code dyal menu list
setTimeout(function(){
	let myList = ["ABOUT","SKILLS","PROJECTS" ,"CONTACT"]
let myListDiv =document.createElement("div")
	myListDiv.classList.add("myList")
myListDiv.style.cssText = "position:relative;display:flex;align-items:center; height:220px;"
let myUlMenu = document.createElement("ul")
myListDiv.append(myUlMenu)
let myUlLine = document.createElement("div")
myUlLine.classList.add("lineUl")
myUlLine.style.cssText = "position:relative;height:0; width:20px; background-color:#9B9380; "
function toHundred() {
if (myCount1 >= 100) {
	clearInterval(designed)
}
myUlLine.style.setProperty("height",`${myCount1}%`)
myCount1++
}
myListDiv.prepend(myUlLine)
	myUlMenu.style.cssText ="display:flex;margin-left:40px; flex-direction:column; justify-content:space-between; list-style-type: none;color:#565448;height:100%;letter-spacing: -1px;font-size: 14px; position:absolute; top:0;left:50px;"
myMain.append(myListDiv)
let designed = setInterval(toHundred,1)
























myList.forEach(function(el,i,a){
	let myCount4 = 0
		let myOption = document.createElement("li")
		myOption.classList.add(el)
	let mySpan = document.createElement("span")
	let myPara = document.createElement("p")
	mySpan.style.cssText = "width: 10px;height: 10px;margin-right: 15px; background-color:#423F3A; transition:.5s"
	myOption.style.cssText ="opacity:0;transform: translateX(-50px);  display:flex; padding: 10px;align-items:center; transition:.5s;    width: 200px;    background-color: #9B9380;"
	function toShow() {
		if (myCount2 >= 3.1) {
			clearInterval(letsgo)
		}
		myOption.style.setProperty("opacity", "1")

		// myOption.style.setProperty("transition-delay", `${myCount2}s`)
		myOption.style.setProperty("transform", "translateX(0px)")
		myCount2 += myCount2 + 0.1
		// console.log(myCount2)
		
	}
			
	document.addEventListener("mouseover",function(e){
		if (e.target.classList.contains("ABOUT") || e.target.classList.contains("SKILLS") || e.target.classList.contains("PROJECTS") || e.target.classList.contains("EXPERIENCE") || e.target.classList.contains("CONTACT") || e.target.classList.contains("myLi") || e.target.classList.contains("reset")) {
			e.target.append(myim)


		}else {
			myim.remove()
		}


	})	

	document.addEventListener("mouseover",function(e){
		if (e.target.classList.contains("submit")) {
			e.target.append(myimclick3)


		}else {
			myimclick3.remove()
		}


	})




	let letsgo = setInterval(toShow,500)
	myOption.append(mySpan)
	myOption.append(myPara)
	myUlMenu.append(myOption)	
setTimeout(function(){

	function appText() {
		myPara.append(el[myCount4])
		myCount4++
		if (myCount4 >= el.length) {
			clearInterval(apot)
		}
	}

	let apot = setInterval(appText,120)
	
},1000)	

})	

let myExplainDaddy = document.createElement("div");
	myExplainDaddy.classList.add("myExplainDaddy")
let myExplain = document.createElement("div");
let myParaExplain = document.createElement("p")
	myParaExplain.style.setProperty("opacity","0")
	myParaExplain.style.setProperty("TRANSFORM","translateX(-20px)")
	myExplain.append(myParaExplain)
	myExplainDaddy.append(myExplain)

setTimeout(function () {
let myExplainSpanSquare = document.createElement("span")
	myExplainSpanSquare.style.cssText = "background-color:#423F3A; width: 10px; height:10px; position:absolute; right:0;bottom:0; transform:translate(-50%, -50%)"
	myExplain.classList.add("myExplain")
	myExplainDaddy.style.setProperty("opacity","0")
	myExplainDaddy.style.setProperty("TRANSFORM","translateY(10px)")
	myExplain.append(myExplainSpanSquare)
myMain.append(myExplainDaddy)
	
},2000)

setTimeout(function(){
	myExplainDaddy.style.setProperty("opacity","1")
	myExplainDaddy.style.setProperty("TRANSFORM","translateY(0px)")
},2000)

		
document.addEventListener("mouseover",function(e){
	if (e.target.classList.contains("ABOUT")){
		myParaExplain.style.setProperty("opacity","0")
	myParaExplain.style.setProperty("TRANSFORM","translate(-20px,-50%)")
		setTimeout(function(){
		myParaExplain.textContent ="Who I'am ? What my Skills?"
		myParaExplain.style.setProperty("opacity","1")
	myParaExplain.style.setProperty("TRANSFORM","translate(0px,-50%)")
},500)
	}else if (e.target.classList.contains("SKILLS")) {
		myParaExplain.style.setProperty("opacity","0")
	myParaExplain.style.setProperty("TRANSFORM","translate(-20px,-50%)")
		setTimeout(function(){
		myParaExplain.textContent = "Every skill with more details."
		myParaExplain.style.setProperty("opacity","1")
	myParaExplain.style.setProperty("TRANSFORM","translate(0px,-50%)")
},500)
	}else if (e.target.classList.contains("PROJECTS")) {

		myParaExplain.style.setProperty("opacity","0")
	myParaExplain.style.setProperty("TRANSFORM","translate(-20px,-50%)")
		setTimeout(function(){
		myParaExplain.textContent = "My Projects with programmation languages i used."
		myParaExplain.style.setProperty("opacity","1")
	myParaExplain.style.setProperty("TRANSFORM","translate(0px,-50%)")
},500)
	}else if (e.target.classList.contains("EXPERIENCE")) {
		myParaExplain.style.setProperty("opacity","0")
	myParaExplain.style.setProperty("TRANSFORM","translate(-20px,-50%)")
		setTimeout(function(){
		myParaExplain.textContent = "My old experience."
		myParaExplain.style.setProperty("opacity","1")
	myParaExplain.style.setProperty("TRANSFORM","translate(0px,-50%)")
},500)
	}else if (e.target.classList.contains("CONTACT")) {
		myParaExplain.style.setProperty("opacity","0")
	myParaExplain.style.setProperty("TRANSFORM","translateX(-20px,-50%)")
		setTimeout(function(){
		myParaExplain.textContent = "Contact me!"
		myParaExplain.style.setProperty("opacity","1")
	myParaExplain.style.setProperty("TRANSFORM","translate(0px,-50%)")
},500)
	}else {
		setTimeout(function(){
		myParaExplain.textContent =""
		myParaExplain.style.setProperty("opacity","1")
	myParaExplain.style.setProperty("TRANSFORM","translate(0px,-50%)")
},500)
	}


// 	if (e.target === document.querySelector(".front-end > .skilli:nth-of-type(2)") || e.target === document.querySelector(".front-end > .skilli:nth-of-type(2) > p") || e.target === document.querySelector(".front-end > .skilli:nth-of-type(2) > .spanDiv")) {
// 					bigDaddy.append(ddiv)

// 					htmlDiv.append(bigDaddy)
// 	skill1end.append(htmlDiv)
// 	}else {
// 		bigDaddy.remove()
// 		htmlDiv.remove()
// 	}

// 	if (e.target === document.querySelector(".front-end > .skilli:nth-of-type(3)") || e.target === document.querySelector(".front-end > .skilli:nth-of-type(3) > p") || e.target === document.querySelector(".front-end > .skilli:nth-of-type(3) > .spanDiv")) {
// 			bigDaddy1.append(ddiv)

// 					cssDiv.append(bigDaddy1)
// 	skill2end.append(cssDiv)
// 	}else {
// 		bigDaddy1.remove()
// 		cssDiv.remove()
// 	}
})

document.addEventListener("click", function(e){
	if (e.target.classList.contains("myProjectName")){
		
		Array.from(e.target.parentElement.children).forEach(function(el) {
  el.classList.remove("myProjectNameClicked");
  el.classList.add("myProjectName");
  myProjectNameImg3.remove();
});
		e.target.classList.add("myProjectNameClicked")
		e.target.classList.remove("myProjectName")
		e.target.append(myProjectNameImg3)
	}else {
		Array.from(myProjectListMenu.children).forEach(function(el) {
  el.classList.remove("myProjectNameClicked");
  el.classList.add("myProjectName");
  myProjectNameImg3.remove();
});
	}

	if (e.target.classList.contains("ABOUT") || e.target.classList.contains("SKILLS") || e.target.classList.contains("PROJECTS") || e.target.classList.contains("EXPERIENCE") || e.target.classList.contains("CONTACT")) {
				for (let i=0; i<document.styleSheets[0].rules.length; i++){
					if(document.styleSheets[0].rules[i].selectorText === ".li-clicked::after") {

							document.styleSheets[0].rules[i].style.setProperty("transform","translateY(0%)")
					}
				}
				for (let i = 0; i < myUlMenu.children.length; i++) {
					myUlMenu.children[i].classList.remove("li-clicked")
					myUlMenu.children[i].classList.add(myUlMenu.children[i].textContent)

				}
				setTimeout(function(){
				e.target.append(myimclick)
				e.target.className = "li-clicked"
for (let i=0; i<document.styleSheets[0].rules.length; i++){
					if(document.styleSheets[0].rules[i].selectorText === ".li-clicked::after") {

							document.styleSheets[0].rules[i].style.setProperty("transform","translateY(100%)")
					}
				}		
				},10)		
		if (myListDiv.classList.contains("myList")){
						function clicked() {
							myListDiv.classList.remove("myList")
					document.body.style.setProperty("flex-direction","column")
					for(let i = 0; i < myUlMenu.children.length; i++){
						myUlMenu.children[i].style.setProperty("transform","translateX(-20%)")
						myUlMenu.children[i].style.setProperty("opacity","0")
						myUlMenu.children[i].style.setProperty("transition-delay",`${myCount3}s`)

					}

			if (myUlMenu.children[myUlMenu.children.length - 1].style.opacity === "0")
					clearInterval(clcl)
					console.log("true")
			}		
					}

					
			let clcl = setInterval(clicked, 300)
			setTimeout(function () {
					myTitle.textContent = ""
					setTimeout(function () { 
						let characters = e.target.textContent;
let result = '';

let myTitle = document.getElementById("title")
let myTextTitle = e.target.textContent
let myCouno = 0
function appendText() {
	myTitle.append(myTextTitle[myCouno])
	myCouno++
	if (myCouno >= myTextTitle.length) {
		clearInterval(addingText)
	}
	
	
		
}
let addingText = setInterval(appendText ,7)


					})
				
			},800)
			setTimeout(function(){
			myTopMenu.append(myListDiv)
			myListDiv.style.setProperty("height","80%")
			myListDiv.style.setProperty("position","")
			myUlMenu.style.cssText = ""
			myUlMenu.classList.add("ul-row")
			myim.remove()
			setTimeout(function () {
			for (let i=0; i<myUlMenu.children.length;i++){
				myUlMenu.children[i].style.cssText = `display: flex;padding:10px; margin-left: 26px !important; width: 150px; list-style-type: none; color: rgb(86, 84, 72); align-items: center; height: 100%; letter-spacing: -1px; font-size: 14px; position: relative;background-color: #9B9380;`;
			}
				
			},300)


			},300)
			


		}
//=====================================================================================================================================
//if click on about
		if (e.target.classList.contains("ABOUT")) {
			myContent.innerHTML = ""
			// myForm.innerHTML = ""
			setTimeout(function () {
					let myContentMenu = document.createElement("div")
			let myContentCard = document.createElement("div")


			myContent.classList.add("content")
			myContentMenu.classList.add("content-menu")
			myContentMenuClicked.classList.add("content-clicked")
			myContentCard.classList.add("content-card")
			let myUline = document.createElement("div")
			let myContentMenuList = document.createElement("ul")

			myContentMenu.append(myUline)
			myContentMenu.append(myContentMenuList)
				myContentMenuList.classList.add("myUl")
			let myAboutMenu = ["Main Skills", "Experience", "Education"]
			myAboutMenu.forEach(function (el) {
				let myList = document.createElement("li")

					myList.classList.add("myLi")
				let mySpan = document.createElement("span")
				let myPara = document.createElement("p")
				myList.append(mySpan)
				myList.append(myPara)
				myPara.append(el)
				myContentMenuList.append(myList)
			})
			myUline.classList.add("line")
			myContent.append(myContentMenu)
			myContent.append(myContentMenuClicked)
			myContent.append(myContentCard)
			myMain.append(myContent)



			let myContentCardTitle = document.createElement("h2")
				myContentCardTitle.append("Status")
				myContentCardTitle.classList.add("titleCard")


			let myName = document.createElement("div")
				myName.classList.add("myName")
			let myNameTitle = document.createElement("p")
			let myNameAnswer = document.createElement("p")
				myName.append(myNameTitle)
				myNameTitle.append("Name")
				myName.append(myNameAnswer)
				myNameAnswer.append("Ziad Demnati")



			let myContentCardWho = document.createElement("diV")
				myContentCardWho.classList.add("who-iam")
			let myTitles = ["Date Of Birthday","Location","Email"]
			let myTitlesAnswers = ["10-18-1999","Morocco-Sale","ziaddrawing@gmail.com"]

			myTitles.forEach(function (el,i) {
			let myContentCardWhoPart = document.createElement("diV")
			myContentCardWhoPart.classList.add("info")
			myContentCardWho.append(myContentCardWhoPart)
				let myPone = document.createElement("p")
					myContentCardWhoPart.append(myPone)
					myPone.append(el)


						let myPtwo = document.createElement("p")
					myContentCardWhoPart.append(myPtwo)
						myPtwo.append(myTitlesAnswers[i])

			})

			let languages = ["Arabic","English","French"]
			let languagesPer = ["100%","80%","60%"]
			let myDivLanguages = document.createElement("div")
				myDivLanguages.classList.add("myLanguages")
			languages.forEach(function(el,i) {
				let myLanguage = document.createElement("diV")
					myLanguage.classList.add("myLangInfo")
					myDivLanguages.append(myLanguage)
				let myLangone = document.createElement("p")
					myLanguage.append(myLangone)
					myLangone.append(el)

					let myLangtwo = document.createElement("div")
						myLangtwo.classList.add("spanDiv")
					for(let i=0; i<=4; i++){
					let myLangspan = document.createElement("span")
						myLangspan.classList.add("span1")
					let myLangspan1 = document.createElement("span")	
						myLangspan.append(myLangspan1)
					myLangtwo.append(myLangspan)
					}
					myLanguage.append(myLangtwo)
			})
			let mySpanDesign = document.createElement("div")
				mySpanDesign.classList.add("mySpans")
				for (let i = 0 ; i<= 10; i++){
					let mySpan = document.createElement("span")
						mySpanDesign.append(mySpan)
						mySpan.classList.add("sp")
				}

			let myError = document.createElement("div")
				myError.classList.add("myEr1")
				myError.append("NO ERROR")
			myContentCard.append(myContentCardTitle) 
			myContentCard.append(myName) 
			myContentCard.append(myContentCardWho) 
			myContentCard.append(myDivLanguages) 
			myContentCard.append(mySpanDesign) 
			myContentCard.append(myError) 
			},1500)			
		}
			
//=====================================================================================================================================
//if click on skills
	if (e.target.classList.contains("SKILLS")) {
			// myForm.innerHTML = ""
			myContent.innerHTML = ""
			setTimeout(function () {
					let myContentMenu = document.createElement("div")
			let myContentCard = document.createElement("div")


			myContent.classList.add("content")
			myContentMenu.classList.add("content-menu")
			myContentMenuClicked.classList.add("content-clicked")
			myContentCard.classList.add("content-card")
			let myUline = document.createElement("div")
			
			let myContentMenuList = document.createElement("ul")

			myContentMenu.append(myUline)
			myContentMenu.append(myContentMenuList)
				myContentMenuList.classList.add("myUl")
			let myAboutMenu = ["Front End", "Back End", "Artist"]
			myAboutMenu.forEach(function (el) {
				let myList = document.createElement("li")

					myList.classList.add("myLi")
				let mySpan = document.createElement("span")
				let myPara = document.createElement("p")
				myList.append(mySpan)
				myList.append(myPara)
				myPara.append(el)
				myContentMenuList.append(myList)
			})
			myUline.classList.add("line")
			myContent.append(myContentMenu)
			myContent.append(myContentMenuClicked)
			myContent.append(myContentCard)
			myMain.append(myContent)



			},1500)			
		}
//=====================================================================================================================================
//if click on project
	if (e.target.classList.contains("PROJECTS")) {
			myContent.innerHTML = ""
			setTimeout(function () {
				
					myProjectList.append(myUline)
					myProjectList.append(myProjectListMenuFather)

					myContent.append(myProjectList)
			// myContent.append(myProjectList)
			myMain.append(myContent)


			},1500)			
		}			
//=====================================================================================================================================
//if click on skills
	if (e.target.classList.contains("CONTACT")) {
			myContent.innerHTML = ""
			setTimeout(function () {
				
			myContent.append(myForm)
			myMain.append(myContent)


			},1500)			
		}
//=====================================================================================================================================
		if (e.target.classList.contains("ABOUT") || e.target.classList.contains("SKILLS") || e.target.classList.contains("PROJECTS") || e.target.classList.contains("EXPERIENCE") || e.target.classList.contains("CONTACT")) {
						myContent.innerHTML = ""	
						// myForm.innerHTML = ""	

						Array.from(myContentMenuClicked.children).forEach(el => {
  el.remove()
});
		}




		if (e.target.classList.contains("li-clicked")){
			e.target.preventDefault()
		}

					document.addEventListener("click", function(e){
	if (e.target.classList.contains("myLi")) {
			
			for (let i =0; i< myContent.children[0].children[1].children.length; i++) {

					myContent.children[0].children[1].children[i].classList.add("myLi")
					myContent.children[0].children[1].children[i].classList.remove("myLi-clicked")
			} 
			e.target.classList.remove("myLi")
			e.target.classList.add("myLi-clicked")
			e.target.append(myimclick2)

			e.target.removeChild(myim)
				
			if (myContentMenuClicked.children.length === 0){
				let myUline2 = document.createElement("div")
			myUline2.classList.add("line")
			myContentMenuClicked.append(myUline2)
			}	
		}
	if (e.target.classList.contains("myLi") || e.target.textContent === "Main Skills") {
			if (myContentMenuClicked.children.length > 1){
				myContentMenuClicked.children[1].remove()
			}		 	
			
			myContentMenuClicked.append(myMainSkills)
	}

	 if (e.target.classList.contains("myLi") || e.target.textContent === "Experience") {
			if (myContentMenuClicked.children.length > 1){
				myContentMenuClicked.children[1].remove()
			}		 				

						myContentMenuClicked.append(myExperience)

					
	}
	 if (e.target.classList.contains("myLi") || e.target.textContent === "Education") {
				if (myContentMenuClicked.children.length > 1){
				myContentMenuClicked.children[1].remove()
			}				
						myContentMenuClicked.append(myEducation)
	}
	if (e.target.classList.contains("myLi") || e.target.textContent === "Front End") {
				if (myContentMenuClicked.children.length > 1){
				myContentMenuClicked.children[1].remove()
			}				
						myContentMenuClicked.append(myFrontEnd)
	}
if (e.target.classList.contains("myLi") || e.target.textContent === "Back End") {
				if (myContentMenuClicked.children.length > 1){
				myContentMenuClicked.children[1].remove()
				// htmlDiv.remove()
			}				
						myContentMenuClicked.append(myBackEnd)
	}
if (e.target.classList.contains("myLi") || e.target.textContent === "Artist") {
				if (myContentMenuClicked.children.length > 1){
				myContentMenuClicked.children[1].remove()
			}				
						myContentMenuClicked.append(myArtist)
	}


})


			

})

},1000)



 
// =========================================================================================
// =========================================================================================

	
}
 if (document.body.classList.contains("start-menu")) {
 	clearInterval(myStartMenuPage)
 }	
}

let myStartMenuPage = setInterval(startMenu,1000)
