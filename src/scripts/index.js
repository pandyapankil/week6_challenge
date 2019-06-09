import Vue from "vue";
import axios from "axios";
import * as NProgress from "nprogress";
console.log('here');
let v = new Vue({
	el: "#app",
	data: {
		inputName: "",
		inputEmail: "",
		errorMsg: "",
		formSubmitted: false,
		postText: "",
		startPage: false
	},
	methods: {
		submit: async function(event) {
			event.preventDefault();
			let emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if (this.inputName == "") {
				this.errorMsg = "Please enter Name.";
			}
			else if (this.inputEmail == "") {
				this.errorMsg = "Please enter email id.";
			}
			else if (!emailRE.test(this.inputEmail)) {
				this.errorMsg = "Please enter correct email id.";
			}
			else {
				NProgress.inc();
				let resp = await axios
					.post('/api/initial_submit', {
							name: this.inputName,
							email: this.inputEmail,
							url: document.URL
					});
				this.formSubmitted = true;
				if (resp.status == 200) {
					NProgress.done();
					this.postText = "Thank you. We will be in touch soon.";
				}
				else {
					this.postText = resp.statusText;
				}
			}
		},
	}
});
