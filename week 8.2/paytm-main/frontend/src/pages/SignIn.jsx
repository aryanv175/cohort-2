import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { BottomWarning } from "../components/BottomWarning";

export const SignIn = () => {
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div>
            <div>
                <Heading label={"Sign In"}/>
                <SubHeading label={"Enter your credentials to access your account"} />
                <InputBox placeholder="Enter your email" label={"Email"}/>
                <InputBox placeholder="Enter your password" label={"Password"}/>
                <div className="pt-4">
                    <Button label={"Sign in"} />
                </div>
                <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"}/>
            </div>
        </div>
    </div>
}