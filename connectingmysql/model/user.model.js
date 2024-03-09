import pool from '../dbConfig.js';
export default class User{
    constructor(id,username,email,password,contact){
      this.id = id;
      this.username = username;
      this.email = email;
      this.password = password;
      this.contact = contact;
    }
    static signIn(email,password){
        return new Promise((resolve,reject)=>{
          pool.getConnection((err,con)=>{
            if(err) reject(err);
            else{
                let sql = "select * from user where email = ? and password = ?";
                con.query(sql,[email,password],(err,result)=>{
                    con.release();
                    err ? reject(err) : resolve(result);
                });
            }
          });
        });
    }
    signUp(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(err)
                  reject(err);
                else{
                    let sql = "insert into user(username,email,password,contact) values(?,?,?,?)";
                    con.query(sql,[this.username,this.email,this.password,this.contact],(err,result)=>{
                        con.release();
                        err ? reject(err) : resolve(result);
                    })
                }  
            }) 
        });
    }
}