// import React,{Component} from "react";
// // import ReactDOM from "react-dom";
// import "./assets/style.css";
// import QuestionBox from "./components/QuestionBox";
// import Result from "./components/Result";
// import quizService  from "./quizService";
// // import Result from "./component/Result";


// class App extends Component{
//   state={
//     questionBank:[],
//     score:0,
//     response:0,
//   }

//   getQuestions=()=>{
//     quizService().then((question)=>{
//       this.setState({
//         questionBank:question,
//       })
//     })
//   }

//   computeAnswer=(answer,correctAnswer)=>{
//     if(answer===correctAnswer){
//       this.setState({
//         score:this.state.score+1,
//       })
//     }

//     this.setState({
//       response:this.state.response<5?this.state.response+1:5,
//     })
//   };

//   playAgain=()=>{
//     this.getQuestions();
//     this.setState({
//       score:0,
//       response:0,
//     })

//   }
//   componentDidMount(){
//     this.getQuestions();
//   }

//   render(){
//     return(
//       <div className="container">
//         <div className="title">Quiz App</div>
//         {this.state.questionBank.length>0&& this.state.response<5&& this.state.questionBank.map(
//           ({question,answers,correct,questionId})=>(
//            <QuestionBox 
//            question={question}
//            options={answers}
//            key={questionId}
//            selected={(answer)=>this.computeAnswer(answer,correct)}
//            />
//           )
//         )}
//         {this.state.response===5?(
//           <Result score={this.state.score} playAgain={this.playAgain}/>
//         ):null}
//       </div>
//     )
//   }
// }

// export default App;



//2nd project quizapp youtube importing form QuizComponent
import React from 'react'
//import QuizGame from './projectquiz3/QuizGame';
import QuizComp from './QuizComponent/QuizComp';

function App() {
  return (
    <>
    <h1>My_Quiz_app</h1>
   <QuizComp/>
   
   </>
  )
}

export default App;
