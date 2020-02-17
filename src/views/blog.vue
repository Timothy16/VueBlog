<template>
  <div>
     <div class="card" v-for="(blog, i) in blogs" :key="i">
                    <div class="card-body">

                    <div class="display">
                 <h3> Post Preview</h3> 
                <label> Post Title : </label>
                <h4>{{blog.title}}</h4>
                 <label> Post Category  : </label>
                <h4>{{blog.categories}}</h4>
                 <label> Post Content  : </label>
                <h4>{{blog.content}}</h4>
                 <label> Post Author  : </label>
                <h4>{{blog.author}}</h4>
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
      blogs : []
    }
  },

  methods : {
  },
  created(){
          axios.get('https://axios-blog-5f047.firebaseio.com/users.json')
          .then(res =>{
            const data = res.data;
            for (let key in data){
              const post = data[key]
              post.id = key
              this.blogs.push(post)
            }
          }).catch(error => {
            console.log(error);
          });

    }
   
    

}

 //  axios.get('https://axios-blog-5f047.firebaseio.com/users.json').then(function(data){
    //     // console.log(data);
    //     return data.json();
    //   })
    //   .then(function(data){
    //     var blogsArray = [];
    //     for(let key in data){
    //      data[key].id=key;
    //      blogsArray.push(data[key]);
    //     }
    //     // console.log(blogsArray);
    //     this.blogs = blogsArray
    //   })
</script>>

<style scoped>
.pic{
  width: 100%;
  /* background-color: yellow */
}
</style>