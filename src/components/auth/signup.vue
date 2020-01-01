<template>
    <div class="container">

     <div class="card teal ">
                <div class="card-title center">
                    Sign up to <br>
                    Rajamati Kumati
                </div>
                <div class="center red-text card-content">
                    <form @submit.prevent="signup">
                        <i class="material-icons">email</i>
                        <div class="input-field inline">
                            <input id="email" type="email" class="validate">
                            <label for="email">email</label>  
                        </div>
                        <br>
                        <i class="material-icons">lock</i>
                        <div class="input-field inline">
                            <input id="password" type="password" class="validate">
                            <label for="password">password</label>
                        </div>
                        <br>
                        <!-- <i class="material-icons">person</i>
                        <div class="input-field inline">
                            <input id="text" type="text" class="validate">
                            <label for="username">username</label>
                        </div> -->
                        <div class="card-actions">
                            <button class="btn blue darken-2 black-text" type="submit">
                                sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
    </div>
</template>