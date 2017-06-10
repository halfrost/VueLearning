<template>


<main class="container">

    <h1 class="page-header">登录</h1>

    <p>输入您的邮箱地址，用于登录的验证邮件将发送到您的邮箱。</p>

    <form action="/login/sendtoken/" method="POST">
        <div class="row">
            <div class="form-group col-xs-9">
                <div class="input-group">
                    <span class="input-group-addon">@</span>
                    <input type="email" placeholder="您的邮箱地址" name="user" class="form-control input-lg">
                </div>
            </div>
            <button type="submit" value="Login" class="btn btn-primary btn-lg col-xs-2">登录</button>
        </div>
    </form>
</main>

</template>

<script>

</script>

<style>

</style>
