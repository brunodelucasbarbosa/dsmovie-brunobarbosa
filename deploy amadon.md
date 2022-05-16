scp -i /Users/bruno.lucas/codigos/ilab/chave-amazon-gama/bruno-chave-gama /Users/bruno.lucas/codigos/dsmovie-brunobarbosa/backend/target/dsmovie-0.0.1-SNAPSHOT.jar ec2-user@ec2-54-161-194-104.compute-1.amazonaws.com:/home/ec2-user/api



# encerrar app = sudo kill $(sudo lsof -t -i:8085)
# iniciar app em segundo plano = nohup 