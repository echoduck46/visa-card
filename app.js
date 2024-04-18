// get UI
// input ကို ခေါ်လိုက်ရင် input box 4 ခုလုံးရောက်လာမှာဆိုတော့ input ကို လှမ်းခေါ်မယ်။
const inputs = document.querySelectorAll('inputs'); // အကုန်လုံးကိုလှမ်းယူမယ်ဆိုတော့ querySelectorAll ဘယ်သူ့ကိုလဲ ('inputs') ကို။
let datas= []; // array အပြင်မှာ တည်ဆောက်လိုက်ချင်းက စာတစ်ခု ရိုက်လိုက်ရင် အခန်းလွတ် အစကနေ ပြန်စ စရာမလိုအောင် အပြင်မှာ တည်ဆောက်လိုက်ချင်း ဖြစ်သည်။


// inputs ထဲက value တစ်ခုချင်းစီ ယူချင်တယ်ဆိုတော့ for each နဲ့ Looping ပတ်ဖို့လိုလာပြီ။
inputs.forEach(function(input){ // အပြင်မှာအများ 
	console.log(input); //အထဲမှာ အနည်း

	// လိုချင်တာက စာလုံးတစ်လုံးရိုက်တိုင်း update ဖစ်တဲ့ value ကိုလိုချင်တာ
	input.addEventLinstener('keyup',function(){ // စာလုံးတစ်လုံးရိုက်တိုင်း update ဖစ်ပေးတာက keyup နဲ့ input
		// console.log(this.value); // this ဆိုတာ input ကို ပြောချင်း ဖြစ်သည်။

		// အခန်းလွတ် array ထဲမှာ ဒီကရိုက်ထည့် လိုက်တဲ့ value တွေကို push နဲ့ သွားထည့်မယ်။
		// လိုချင်တာက object နဲ့ လိုချင်တာ ဆိုတော့ key နဲ့ value ပေးလိုက်တယ်။
		datas.push({ 
			digit:input[0].values, // digit က key name , input က 4 ခုရှိတယ်ဆိုတော့ ၊ index number 0 မှာရှိတဲ့ value လို့ meaning ရ.
			name:input[1].values,
			exp:inputs[2].values,
			ccv:inputs[3].values
		});

		// ဒီမှာ အဖြေ သုံးခု ထွက်လာမယ်၊ ဘာဖစ်လို့လဲဆိုတော့ keyup က value တစ်ခု ရိုက်လိုက်တိုင်း array တစ်ခုထွက်လာတယ်ဆိုတော့ 123 ( value သုံးခု ) ရိုက်ကြည့်လိုက်တော့ နောက်ဆုံးက index array တစ်ခုဘဲ အမှန်ဖြစ်နေတယ်။
		// console.log(datas);

		// array မှာနောက်ဆုံးက index array အဖြေဘဲ ထုတ်ပေးစေချင်ရင် length-1 
		console.log(datas[datas.length-1]);
	}); 
}); 

// ................................................


// 8CV