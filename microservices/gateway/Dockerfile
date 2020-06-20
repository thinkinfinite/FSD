FROM openjdk:8-jdk-alpine
ADD target/gateway-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT java $JAVA_OPTS -jar /app.jar --spring.profiles.active=test
