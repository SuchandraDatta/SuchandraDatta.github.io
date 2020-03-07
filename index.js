let firstCommand='echo $displaySkillset'
let secondCommand="ls -all Skills"
let displayCommand=document.querySelector('.thisP')
let terminal=document.querySelector('.forTerminal')
let flag=0;

function sleep(ms) 
{
 return new Promise(resolve => setTimeout(resolve, ms));
}
async function startAnimation()
{
	for(i=0;i<firstCommand.length;i++)
     {
		await sleep(100);
		displayCommand.innerHTML+=firstCommand.substring(i,i+1);        
     }
	terminal.innerHTML += "<span class=\"filepath\">skills@Suchandra:~$</span>&nbsp;Languages and tools used<br/><span class=\"filepath\">skills@Suchandra:~$</span>&nbsp;";
   for(i=0;i<secondCommand.length;i++)
   {
	await sleep(100);
	terminal.innerHTML+=secondCommand.substring(i,i+1);
    }
	terminal.innerHTML += "<table cellspacing=\"2\" cellpadding=\"5\" style=\"text-align: center;\"> <tr> <td><span class=\"topic\">Webpage Design</span></td> <td>HTML5, CSS3, JavaScript</td> </tr> <tr> <td><span class=\"topic\">Web Frameworks</span></td> <td>Bootstrap4, React</td> </tr> <tr> <td><span class=\"topic\">Machine Learning</span></td> <td>Python, Keras, Tensorflow, OpenCV </tr> <tr> <td><span class=\"topic\">Backend</span></td> <td>Django, PHP, MySQL</td> </tr> <tr> <td><span class=\"topic\">Others</span></td> <td>Java, C, C++ </tr> <tr> <th colspan=\"2\">Tools used</th> </tr> <tr> <td><span class=\"topicTools\">Firebase, GitHub(web)</span></td> <td><span class=\"topicTools\">Google Colab, Kaggle(machine learning)</span></td> </tr> </table>";
}
async function checkOffsetForTerminal()
{
	ele=document.querySelector('.forTerminal');
	let rect = ele.getBoundingClientRect();
	console.log(rect);

	if(rect.top >= 0 && rect.left>=0 && rect.right<=window.innerWidth && flag == 0)
	{
		console.log('in viewport');
		startAnimation();
		flag=1;
	}
	else 
	console.log('not in viewport');
	
}
window.addEventListener('scroll', checkOffsetForTerminal);