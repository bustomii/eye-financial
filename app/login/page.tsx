"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Login() {
    return (
        <div className="w-full lg:grid h-screen grid-cols-1 lg:grid-cols-2 sm:overflow-hidden">
            <div className="flex items-center justify-center w-full h-full">
                <Card className="mx-auto max-w-sm">
                    <CardHeader>
                        <CardTitle className="text-2xl">Login</CardTitle>
                        <CardDescription>
                            Enter your email below to login to your account
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    <Link href="#" className="ml-auto inline-block text-sm underline">
                                        Forgot your password?
                                    </Link>
                                </div>
                                <Input id="password" type="password" required />
                            </div>
                            <Button type="submit" className="w-full">
                                Login
                            </Button>
                            <Button variant="outline" className="w-full">
                                Login with Google
                            </Button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <Link href="/register" className="underline">
                                Sign up
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="hidden bg-muted lg:flex justify-center items-center">
                <Image
                    src="/icons/png/eye.png"
                    alt="Image"
                    width="450"
                    height="450"
                    className="object-cover dark:brightness-[0.2] dark:grayscale dark:contrast-[0.8] dark:blur-[1px]"
                />
            </div>
        </div>
    )
}