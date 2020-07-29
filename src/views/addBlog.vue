<template>
    <div>
            <div class="container mt-4" v-if="blogForm">
            <center>
            <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Hi! <br> Welcome Admin</h5>
              <p class="card-text">it's {{date()}}</p>
          <button class="btn btn-secondary"  @click="showForm"> Create Blog Post</button>  
          </div>
           </div>
         </center>
         </div>
            
           
        

        

        <div class="container mt-4" v-else>
            <div class="row">
            <div class="col-sm-5">
                <form @submit.prevent = addPost v-if="preview">
                <div class="form-group">
                    <label>Title</label>
                    <input type="text"  class="form-control" placeholder="add post title" v-model="postBlog.title">
                </div>
                <div class="form-group">
                    <label>Categories:</label>
                    <select class="form-control" v-model="postBlog.categories">
                        <option disabled selected>Please Chooose</option>
                        <option value="Buiness">Business</option>
                        <option value="Religion">Religion</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Sport">Sport</option>
                        <option value="Politics">Politics</option>
                        <option value="Education">Education</option>
                    </select>
                </div>

                <div class="form-group" >
                <label for="comment">Content:</label>
                <textarea class="form-control" rows="5" id="comment" placeholder="add content" v-model="postBlog.content"></textarea>
                </div>

            <div class="form-group">
                    <label>Author</label>
                    <input type="text"  class="form-control" placeholder="add author" v-model="postBlog.author">
                </div>

                 <button type="submit" class="btn btn-success btn-lg">add Post</button>
              </form>
              </div>

                <div class="col-sm-6">
                        <div class="card" >
                    <div class="card-body">

                    <div class="display">
                 <h3> Post Preview</h3> 
                 <!-- <h3> Post {{index+1}} </h3> -->
                
                <label> Post Title : </label>
                <h4>{{postBlog.title}}</h4>
                 <label> Post Category  : </label>
                <h4>{{postBlog.categories}}</h4>
                 <label> Post Content  : </label>
                <h4>{{postBlog.content}}</h4>
                 <label> Post Author  : </label>
                <h4>{{postBlog.author}}</h4>
            </div>




                    </div>

                </div>

                </div>
                </div>
                
               
            
           
           
          
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'
import sweetalert from 'sweetalert'
export default {
    data(){
    return{
      blogForm : true,
      preview : true,
      postBlog : {
          title : '',
          categories: '',
          content : '',
          author : '',
      },
    //   displayNews : []

    }
  },
  methods : {
      showForm(){
          this.blogForm = !this.blogForm 
          
      },
  
     addPost () {
       if(this.postBlog.title === '' || this.postBlog.categories === '' || this.postBlog.content === '' || this.postBlog.author === ''){
         swal("hoops ", "Field cannot be empty!", "warning")
       }
            else(    axios.post('https://axios-blog-5f047.firebaseio.com/users.json', this.postBlog)
                .then(function (res){
                console.log(res)
                swal("Successful! ", "Blog Post created!", "success")
                // this.preview = false
                })
                .catch(function(error){
                console.log(error)
                }))
                this.postBlog = {
                            title : '',
                            categories: '',
                            content : '',
                            author : '',
                        }
                
      },
      date(){
                let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                //  return (new Date().getDate())
                  let day = days[new Date().getDay()]
                  return day
      },
  }
}
</script>

<style scoped>
h2{
    /* background-color: blue; */
    color: black;
    word-spacing: 10px;
    width: 50%;
    /* height: 80%; */
}
h3{
    font-size: 30px;
    font-style: normal;
    font-weight: bold;
}
label{
    font-size: 20px;
     /* font-weight: bold; */

}
 #header {
    height: 56px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    background-color: #521751;
    padding: 0 20px;
  }

  .logo {
    font-weight: bold;
    color: white;
    font-size: 30px;
  }

  .logo a {
    text-decoration: none;
    color: white;
  }

  nav {
    height: 100%;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
  }

  li {
    margin: 0 16px;
  }

  li a {
    text-decoration: none;
    color: white;
  }

  li a:hover,
  li a:active,
  li a.router-link-active {
    color: #fa923f;
  }
</style>