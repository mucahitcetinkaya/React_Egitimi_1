import MyComponent from "./MyComponent";

function Example() {

    return <div>

        Hello from example component

        <MyComponent />

        <MyComponent />

        <MyComponent />

    </div>

}

export default Example;


/*
bir funchion olusturduk 
returndan sonrasını ekrana yazar demıstık
div içine yazılmasını istediğimizi yazdık
program calısıyor ama bu yazı ekranda gozukmedi 
Example.js ve App.js var ama ikisi birbirinden haberdar değil
App.js içinde Exapmle.js i cagırmamız lazım
oncelikle burayı dısarıya aktarmak gerekiyor
dısarıya actık  
export default Example;
App.js e gidelim
      <MyComponent/>
olusturup cagırdık import ettik 
*/