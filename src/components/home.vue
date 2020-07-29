<template>
<div>
  <div v-if="updateForm">
    <div class="container mt-1">
      <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="c3.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h2>Caltona Abicso</h2>
              <p>Looking for where to spend your next vacation? Visit Philadephia</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="c2.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h2  style="color:blue">Facebook ads</h2>
              <h4>Looking for how to get to end-users.....try Facebook carousel</h4>
            </div>
          </div>
          <div class="carousel-item">
            <img src="c2.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h2  style="color:blue">Facebook ads</h2>
              <h4>Looking for how to get to end-users.....try Facebook carousel</h4>
            </div>
          </div>
          <div class="carousel-item">
            <img src="c4.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h1 >Isreal Government to send Military to Iran</h1>
              <p>www.dynazy.com</p>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  <div class="container">
    <div class="card mt-4"  v-for="(blog, index) in blogs" :key="index">
      <div class="card-header">
        <h2> {{blog.title}}</h2> {{date()}}
      </div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>{{blog.content}}</p>
          
          <footer class="blockquote-footer"><cite title="Source Title"> {{blog.author}} ({{blog.categories}})</cite></footer>
        </blockquote>
        <button class="btn btn-danger mt-3" @click="deletePost(blog.id)">Delete Post</button>
        <button class="btn btn-info mt-3 ml-3" @click="editBlog(blog)">Edit Post</button>
      </div>
    </div>
  </div>
  </div>



 <div class="container mt-4" v-else>
            <div class="row">
            <div class="col-sm-5">
                <form>
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
                 <button type="submit" class="btn btn-success" @click.prevent="updatePost(postBlog.id)">Update Post</button>
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
export default {
  data(){
    return {
      updateForm : true,
      blogs : [],
       postBlog : {
          title : '',
          categories: '',
          content : '',
          author : '',
      },
    }
  },

  methods : {
    editBlog(id){
      this.updateForm = !this.updateForm
      this.postBlog = id
    },

    updatePost(i){
            swal({
                title: "Are you sure?",
                text: "Once you Update, previous post will be lost",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                  axios.put(`https://axios-blog-5f047.firebaseio.com/users/${i}.json`, this.postBlog)
                    .then(function (res){
                    console.log(res)
                    swal("Post successfully updated!", {
                      icon: "success",
                    });
                    // this.getallBlogs()
                  },
                  function(error){
                    console.log(error)
                })
                this.reload()
                  
                } else {
                  swal("Your post is safe!");
                }
              });

        },

    reload(){
            var timeout = setTimeout("location.reload(true);", 6000);
            function resetTimeout(){
                clearTimeout(timeout);
                timeout = setTimeout("location.reload(true", 6000);
            }
        },
      deletePost(i){
                    swal({
                title: "Are you sure?",
                text: "Once deleted, post will be lost",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                  axios.delete(`https://axios-blog-5f047.firebaseio.com/users/${i}.json`)
                    .then(function (res){
                    console.log(res)
                   swal("Post successfully deleted!", {
                      icon: "success",
                    });
                    this.getallBlogs()
                    
                  },
                  function(error){
                    console.log(error)
                })
                this.reload()
                  
                } else {
                  swal("Your post is safe!");
                }
              });
    },

    date(){
          let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
          var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            //  return (new Date().getDate())
            let day = days[new Date().getDay()]
            let m = months[new Date().getMonth()]
            return   day + " "+ (new Date().getDate())  + " " + m + " "+ (new Date().getFullYear()) + " " + (new Date().getHours()) + ":"+ (new Date().getMinutes()) 
      },
      getallBlogs(){
        axios.get('https://axios-blog-5f047.firebaseio.com/users.json')
          .then(res =>{
            const data = res.data;
            for (let key in data){
              const post = data[key]
              post.id = key
              this.blogs.unshift(post)
            }
          }).catch(error => {
            console.log(error);
          });

      }
  },
  created(){
          this.getallBlogs()
    }
   
    

}
</script>

<style scoped>
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