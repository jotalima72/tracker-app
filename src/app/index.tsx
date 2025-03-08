import React from "react";
import Constants from 'expo-constants';
import { View, Text, StyleSheet, Alert } from "react-native";
import { router } from "expo-router";
import ThemedButton from "@/components/button";
import Input from "@/components/input";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { BACKEND_URL } from "@/services/constants";
import { AuthProvider, useAuth } from "./auth";

const loginSchema = z.object({
  email: z.string().email("Email inválido").transform(email => email.toLowerCase()),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

type LoginFormData = z.infer<typeof loginSchema>;
export default function Index() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  const { login } = useAuth();
  const onSubmit = async (data: LoginFormData) => {
    console.log(BACKEND_URL + "auth/login")
    try {
      const response = await fetch(BACKEND_URL + "auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      if (!response.ok) {
        const errorData = await response.json();
        Alert.alert("Erro", errorData.message || "Erro ao fazer login.");
        return;
      }
      const { access_token } = await response.json();
      await login(access_token);
      router.replace("/tasks");
    }
    catch (err: any) {
      Alert.alert("Erro", err.message || "Erro ao fazer login.");
    };
  };

  return (
    <AuthProvider>
      <View style={styles.container}>
        <Text style={styles.text}>Login</Text>

        <Controller
          control={control}
          name="email"
          defaultValue=""
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Input
                placeholder="Email"
                errors={errors.email}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            </>
          )}
        />

        <Controller
          control={control}
          name="password"
          defaultValue=""
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Input
                placeholder="Senha"
                errors={errors.password}
                secureTextEntry
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />

            </>
          )}
        />

        <ThemedButton title="Entrar" onPress={handleSubmit(onSubmit)} />
      </View>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: "#AFBED1",
    justifyContent: "center",
    gap: 16,
  },
  text: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
  }
});
