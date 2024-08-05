async function init(chatModel, bubbleColor, bubbleIcon, chatWidth = '450px', chatHeight = '550px', bottom = '20px', right = '20px') {
	let id = await chatModel;

	let botURL = `https://studio.workerbot.ai/#/bots/embed_v3/${id ? id : null}`,
		 botIconVector =
			  '<svg width="40" height="40" viewBox="0 0 152 103" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M152 54.847V66.162C152 69.9021 148.978 72.9203 145.263 72.9203H144.287C143.111 89.301 129.543 102.249 112.977 102.249H108.686V87.3126C119.773 86.1645 128.415 76.7314 128.415 65.2743V57.4154C128.415 45.1772 118.562 35.2588 106.405 35.2588H45.1838C33.0149 35.2588 23.1504 45.1772 23.1504 57.4154V65.2743C23.1504 77.5126 33.0031 87.4309 45.1838 87.4309H93.9889L108.697 102.249H39.0229C22.4332 102.249 8.88861 89.301 7.71287 72.9203H6.73701C3.02166 72.9203 0 69.9021 0 66.162V54.847C0 51.1069 3.02166 48.0651 6.73701 48.0651H7.87748C9.84097 32.4892 23.021 20.4285 39.0347 20.4285H112.989C129.002 20.4285 142.183 32.501 144.146 48.0651H145.287C148.99 48.0769 152 51.1069 152 54.847Z" fill="white"/><path d="M60.5311 63.0573C61.4667 59.0686 59.0131 55.0716 55.0509 54.1298C51.0886 53.1879 47.1181 55.6579 46.1825 59.6466C45.2469 63.6352 47.7005 67.6322 51.6627 68.5741C55.625 69.5159 59.5955 67.046 60.5311 63.0573Z" fill="white"/><path d="M101.551 68.1996C105.313 66.6311 107.099 62.2899 105.541 58.5033C103.983 54.7167 99.6704 52.9185 95.9088 54.487C92.1473 56.0555 90.361 60.3967 91.9191 64.1834C93.4773 67.97 97.7897 69.7681 101.551 68.1996Z" fill="white"/><path d="M75.7882 15.6943C80.0934 15.6943 83.5834 12.181 83.5834 7.84713C83.5834 3.51328 80.0934 0 75.7882 0C71.4831 0 67.993 3.51328 67.993 7.84713C67.993 12.181 71.4831 15.6943 75.7882 15.6943Z" fill="white"/><path d="M77.6342 13.5638H73.9541V23.5414H77.6342V13.5638Z" fill="white"/></svg>';

	let botIcon =
		 '<img width="60" style="border-radius: 50%;" src="' +(bubbleIcon ? bubbleIcon : "https://studio.conductify.ai/prod-budi-app-assets/app_4e7db5462cf0424cae08a587b3543386/attachments/15d37742-d8af-49fa-8f31-b942acd54470.png") + '" alt="bot-icon" />';

	let chatBubble = document.createElement('div');
	chatBubble.style.position = 'fixed';
	chatBubble.style.bottom = bottom;
	chatBubble.style.right = right;
	chatBubble.style.width = '60px';
	chatBubble.style.height = '60px';
	chatBubble.style.backgroundColor = '#fff';
	chatBubble.style.borderRadius = '50%';
	chatBubble.style.color = '#fff';
	chatBubble.style.display = 'flex';
	chatBubble.style.justifyContent = 'center';
	chatBubble.style.alignItems = 'center';
	chatBubble.style.cursor = 'pointer';
	chatBubble.style.zIndex = '999999';
	chatBubble.style.boxShadow = 'rgba(0, 0, 0, 0.24) 0px 3px 8px';
	chatBubble.innerHTML = botIcon;
	chatBubble.setAttribute('tabindex', '-1');

	let chatIFrame = document.createElement('iframe');
	chatIFrame.style.zIndex = '999998';
	chatIFrame.style.position = 'fixed';
	chatIFrame.style.bottom = '100px';
	chatIFrame.style.right = '20px';
	chatIFrame.style.width = chatWidth;
	chatIFrame.style.height = chatHeight;
	chatIFrame.style.border = '1px solid #ffffff00';
	chatIFrame.style.display = 'none';
	chatIFrame.style.borderRadius = '10px';
	chatIFrame.style.boxShadow =
		 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px';
	chatIFrame.style.opacity = '0';
	chatIFrame.style.transition = 'opacity 0.2s ease-in-out';
	chatIFrame.style.userSelect = 'none';
	chatIFrame.style.maxHeight = '73vh';
	chatIFrame.style.maxWidth = '90vw';
	chatIFrame.style.setProperty('-moz-user-select', 'none');
	chatIFrame.style.setProperty('-webkit-user-select', 'none');
	chatIFrame.style.setProperty('-khtml-user-select', 'none');
	chatIFrame.src = botURL;
	let chatOpened = false;
	chatBubble.addEventListener('click', () => {
		 chatOpened
			  ? ((chatIFrame.style.opacity = '0'),
					setTimeout(() => {
						 chatIFrame.style.display = 'none';
					}, 200),
					(chatOpened = false),
					(chatBubble.innerHTML = botIcon),
					(chatBubble.style.backgroundColor = '#fff'))
			  : ((chatIFrame.style.display = 'block'),
					setTimeout(() => {
						 chatIFrame.style.opacity = '1';
					}, 0),
					(chatOpened = true),
					(chatBubble.innerHTML =
						 '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M18 6l-12 12"></path> <path d="M6 6l12 12"></path> </svg>'),
					(chatBubble.style.backgroundColor = bubbleColor));
	}),
		 document.body.appendChild(chatBubble),
		 document.body.appendChild(chatIFrame);
}
function ready(chatModel) {
	if ('loading' !== document.readyState) {
		 chatModel();
		 return;
	}
	document.addEventListener('DOMContentLoaded', chatModel);
}
!(function () {
	let chatModel = document
		 .querySelector('script[data-chat-service="WorkerBot"][data-bot-id]')
		 .getAttribute('data-bot-id'),
		 bubbleColor =
			  document
					.querySelector('script[data-chat-service="WorkerBot"][data-bubble-color]')
					?.getAttribute('data-bubble-color') ?? 'rgb(0, 21, 92)',
		 chatWidth =
			  document
					.querySelector('script[data-chat-service="WorkerBot"][data-chat-width]')
					?.getAttribute('data-chat-width') ?? '450px',
		 chatHeight =
			  document
					.querySelector('script[data-chat-service="WorkerBot"][data-chat-height]')
					?.getAttribute('data-chat-height') ?? '550px';
	bottomPosition =
		 document
			  .querySelector('script[data-chat-service="WorkerBot"][data-bottom-position]')
			  ?.getAttribute('data-bottom-position') ?? '20px';
	rightPosition =
		 document
			  .querySelector('script[data-chat-service="WorkerBot"][data-right-position]')
			  ?.getAttribute('data-right-position') ?? '20px';
	bubbleIcon =
		 document
			  .querySelector('script[data-chat-service="WorkerBot"][data-bubble-icon]')
			  ?.getAttribute('data-bubble-icon') ?? null;

		 ready(() => init(chatModel, bubbleColor, bubbleIcon, chatWidth, chatHeight, bottomPosition, rightPosition));
})();
