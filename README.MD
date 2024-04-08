# **Episode 06:-**

**Login/Logout:-**

so if we have 1 btn called login and on click of it i wanted to change it to logout ?? how we can do that, by creating simple local variable its 1st approach.

### **1st Approach:- Simple creating a Local variable called btnName.**

constHeader= () => {

 **let btnName ="Login";**

    return (

    <divclassName="header">

    `<div>`

    <img

    className="logo"

    src={LOGO_URL}

    />

    `</div>`

    <divclassName="nav-container">

    `<ul>`

    `<li>`Home `</li>`

    `<li>`About Us `</li>`

    `<li>`Contact US `</li>`

    `<li>`Cart `</li>`

 **<button className="login"onClick={() => {**

 **btnName = "Logout";**

 **console.log("Logout");**

 **}}>{btnName}`</button>`**

    `</ul>`

    `</div>`

    `</div>`

    );

  };

**so in this method asi click on my btn inconsole my btnName variable get updated to logout but the its not refelcting on UI?? bcz to show updated/leatest value of btnName my header component need to be refresh/rendered and my local variable does not render/refresh the component its job is only to update the value of btnName not to refresh, so here our local variable fails.**

**and here the state Variable comes in pitcher.**

### **2nd Approach:- using state variable.**

constHeader= () => {

  **const[btnName,setbtnName] =useState("Login");**

    return (

    <divclassName="header">

    `<div>`

    <img

    className="logo"

    src={LOGO_URL}

    />

    `</div>`

    <divclassName="nav-container">

    `<ul>`

    `<li>`Home `</li>`

    `<li>`About Us `</li>`

    `<li>`Contact US `</li>`

    `<li>`Cart `</li>`

 **<buttonclassName="login"onClick={() => {**

 **setbtnName("Logout");**

 **console.log(btnName);**

 **}}>{btnName}`</button>`**

    `</ul>`

    `</div>`

    `</div>`

    );

  };

**so in this i created a state variable called btnName and as soon as i click on this button, my btnName should get updated so for that we again not used the btnName varaible again bcz we can not update the state variable directly, and its rule of state variable for that we have setbtnName, its a state variable comes with extra powers with it, i used setbtnName so what it will do is as soon as i click on this btn my setbtnName will be called and it will do,**

**2 things 1st update the value of btnName to logout using setbtnName and 2nd it will refresh our only header component, means its triggered the reconsilation cycle for the perticuler header componet => diff algo. and everything happened in milisec's.**

**whenever state variable updates, react triggers the reconsilation cycle AKA re-render the components.**

### **Render :- refreshing a perticuler component is known as rendering.**

### **how we can make it toggle funcnality its simple by adding ternary operator.:-**

constHeader= () => {

  const[btnName,setbtnName] =useState("Login");

    return (

    <divclassName="header">

    `<div>`

    <img

    className="logo"

    src={LOGO_URL}

    />

    `</div>`

    <divclassName="nav-container">

    `<ul>`

    `<li>`Home `</li>`

    `<li>`About Us `</li>`

    `<li>`Contact US `</li>`

    `<li>`Cart `</li>`

 **<buttonclassName="login"onClick={() => {**

 **btnName === "Login" ? setbtnName("Logout"): setbtnName("Login");**

 **console.log(btnName);**

 **}}>{btnName}`</button>`**

    `</ul>`

    `</div>`

    `</div>`

    );

  };
