import React from 'react';
import './About.css';

function About() {

	return (
		<React.Fragment>
			<section className='intro'>
				<p>Over the past decade I've worked with hundreds of businesses and business owners to create and implement digital and physical solutions to help overcome a variety of obstacles. With these businesses and obstacles ranging from small to large, I've been able to develop and refine a very broad yet related set of creative skills to power the day to day. Flexibility and clear communication help keep it all on track.</p>
				<p>Below is a brief overview of my experiences and abilities.</p>
			</section>
			<section className='cv-container'>
				<article className='cv-column' id='personal'>
					<div className='cv-block'>
						<h2>Cameron<br />McDougall</h2>
						<span>hey@cameronmcdougall.eu</span>
					</div>
				</article>
				<article className='cv-column' id='specs'>
					<div className='cv-block'>
						<h4>Skills</h4>
						<h5>Visual</h5>
						<p>Front End Development <span className='pipe'>|</span> Graphic + Print Design <span className='pipe'>|</span> UX/UI Design <span className='pipe'>|</span> Typography <span className='pipe'>|</span> Branding + Identity <span className='pipe'>|</span> Layout <span className='pipe'>|</span> Photography</p>
						<h5>Languages + Frameworks</h5>
						<p>HTML5 <span className='pipe'>|</span> CSS3 <span className='pipe'>|</span> ES6 Javascript <span className='pipe'>|</span> ReactJS <span className='pipe'>|</span> PHP <span className='pipe'>|</span> WordPress CMS <span className='pipe'>|</span> jQuery <span className='pipe'>|</span> SCSS <span className='pipe'>|</span> Git <span className='pipe'>|</span> NPM <span className='pipe'>|</span> MAMP <span className='pipe'>|</span> WHM + WHMCS</p>
						<h5>App Proficiency</h5>
						<p>Sublime Text <span className='pipe'>|</span> Dreamweaver <span className='pipe'>|</span> InDesign <span className='pipe'>|</span> Photoshop <span className='pipe'>|</span> Illustrator <span className='pipe'>|</span> Adobe XD <span className='pipe'>|</span> Bridge <span className='pipe'>|</span> CLI (Mac + Windows) <span className='pipe'>|</span> Google Analytics <span className='pipe'>|</span> Google Ads</p>
					</div>
					<div className='cv-block'>
						<h4>Education</h4>
						<h5>City of Glasgow College</h5>
						<p><strong>HND Computer Arts + Design</strong><br />Units studied during this course</p>
							<div className='split-list'>
								<ul>
									<li>Adv. Software Application</li>
									<li>Front End Web Design</li>
									<li>Philosophical Aesthetics</li>
									<li>Life Drawing</li>
								</ul>
								<ul>
									<li>Art + Design Adv. Project</li>
									<li>Observational Drawing</li>
									<li>Professional Studies</li>
									<li>3D Animation</li>
								</ul>
							</div>
						<p><strong>HNC Computer Arts + Design</strong><br />Units studied during this course</p>
							<div className='split-list'>
								<ul>
									<li>Art + Design: Context/Projects</li>
									<li>Animation: An Introduction</li>
									<li>Creative Industries</li>
									<li>Theory + Practice</li>
								</ul>
								<ul>
									<li>Art + Design: Technologies</li>
									<li>Compositing + Motion Graphics</li>
									<li>Developmental Drawing</li>
									<li>Digital Imaging</li>
								</ul>
							</div>
					</div>
					<div className='cv-block'>
						<h4>Experience</h4>
						<p><strong>Exacta Print Ltd<span className='pipe'>|</span>Web + Graphic Designer<br />Feb '17 - Present</strong><br />
						My role at Exacta Print has been a busy and varied one. Predominantly consisting of creating, launching and managing websites from the ground up for businesses small to medium in size. I have gained a wealth of experience within this role, especially in both front end and back end development areas. I played an integral part in modernising Exacta Print’s web department/web workflow and managed to reduce outgoings substantially for several web-based services, both b2b and customer facing. I was also given the opportunity to break up the web work with graphic and print design jobs for customers looking for artwork for their print. In addition to the experience gained with commercial and customer facing web services and projects, I now have solid experience working within a fast-paced creative environment, managing unexpected jobs or events and improving workflow and web management processes.
						</p> 
						<p><strong>Freelance<span className='pipe'>|</span>Graphic Designer<br />Jan '16 - Feb '17</strong><br />
						Designing solutions for clients while adhering to mutually developed briefs. Projects included print and digital materials, web design/creation and identity/branding creation and development. Through this role, I gained a great deal of experience with face-to-face client relationships, as well as improving on various other skills such as problem solving, critical thinking and negotiation skills.</p>
						<p><strong>Royal Mail<span className='pipe'>|</span>Postman<br />Feb '12 - Feb '17</strong><br />
						I worked as part of a larger team to organise and deliver mail throughout Glasgow city centre. During my time with the Royal Mail, I developed strong timekeeping and teamwork skills as well as learning to be more adaptable and flexible in my workflow to help meet ever changing conditions. I also attended quarterly meetings with my manager to assess and analyse the targets and goals that had been set for me at the previous meeting.</p>
					</div>
				</article>
			</section>
		</React.Fragment>
	);
}

export default About;