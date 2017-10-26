/**
 * Created by sam on 16-4-13.
 */


module.exports = function (grunt) {


    grunt.loadNpmTasks('grunt-aws-s3');
    grunt.loadNpmTasks('grunt-jsonlint');



    grunt.initConfig({

        aws_s3: {
            options: {
                accessKeyId: process.env.AWS_KEY_PERSONAL, // Use the variables
                secretAccessKey: process.env.AWS_SECRET_PERSONAL, // You can also use env variables
                region: 'us-west-2',
                uploadConcurrency: 5, // 5 simultaneous uploads
                downloadConcurrency: 5 // 5 simultaneous downloads
            },
            production: {
                options: {
                    bucket: 'sambhattacharyya.com',
                    differential: true // Only uploads the files that have changed
                },
                files: [
                    {
                        expand: true,
                        cwd: 'src',
                        src: ['**', '!**/*~'],
                        dest: ''
                    }
                ]
            }

        },

        jsonlint: {
           db: {
                src: ["src/https://medium.com/@sambhattacharyya/db.json" ],
                filter: 'isFile'
            }
        }


    });


    grunt.registerTask('push', ['jsonlint', 'aws_s3:production']);









};

