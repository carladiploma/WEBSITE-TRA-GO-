var newCommentBox = document.getElementById('newcomment');
var textarea = document.getElementById('textarea');
var button = document.getElementById('commentbutton');

function goComment() {
	var newComment = document.createElement('ul');
	newComment.style.marginLeft = "265px";
	newComment.style.width = "785px";
	newComment.style.borderBottom = "1px solid #e5e5e5";
	newComment.style.padding = "15px 10px";
	newComment.style.fontFamily = "sans-serif";
	newComment.style.listStyle = "none";
	newComment.innerHTML = textarea.value;

	var reply = document.createElement('a');
	reply.innerHTML = "reply";
	reply.style.color = "#4caf50";
	reply.style.position = "relative";
	reply.style.left = "50px";
	reply.style.top = "7px";
	reply.style.fontFamily = "sans-serif";
	reply.addEventListener("click", function(){

	var theReplyBox = document.createElement("input");
	theReplyBox.setAttribute("type", "text");
	theReplyBox.style.width = "250px;";
	theReplyBox.style.height = "auto";
	theReplyBox.style.outline = "none";
	theReplyBox.style.position = "relative";
	theReplyBox.style.left = "370px";
	theReplyBox.style.bottom = "25px";

	var replyCommentBtn = document.createElement('button');
	replyCommentBtn.style.backgroundColor = "transparent";
	replyCommentBtn.style.border = "none";
	replyCommentBtn.style.borderTop = "3px solid #4caf50";
	replyCommentBtn.style.borderRight = "3px solid #4caf50";
	replyCommentBtn.style.width = "10px";
	replyCommentBtn.style.height = "10px";
	replyCommentBtn.style.transform = "rotate(45deg)";
	replyCommentBtn.style.position = "relative";
	replyCommentBtn.style.left = "380px";
	replyCommentBtn.style.bottom = "25px";
	replyCommentBtn.style.outline = "none";


	replyCommentBtn.addEventListener("click", function(){
	var newReply = document.createElement('li');
	newReply.innerHTML = theReplyBox.value;
	theReplyBox.style.position = "relative";
	theReplyBox.style.left = "370px";
	theReplyBox.style.bottom = "25px";
	newReply.style.paddingTop = "15px";
	newReply.style.paddingLeft = "5px";
	newReply.style.marginLeft = "10px";
	newReply.style.marginBottom = "20px";
	newReply.style.marginTop = "15px";
	newReply.style.borderLeft = "1px solid #a1a1a1";

	reply.innerHTML = "replies :";

	newComment.appendChild(newReply);
	theReplyBox.value = "";

	});

	newCommentBox.appendChild(theReplyBox);
	newCommentBox.appendChild(replyCommentBtn);

	});

	var lineBreak = document.createElement('br');
	lineBreak.setAttribute("id", "break");

	newCommentBox.appendChild(newComment);
	newComment.appendChild(lineBreak);
	newComment.appendChild(reply);
	textarea.value = "";
}
