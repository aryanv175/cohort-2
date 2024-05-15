import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { BottomWarning } from "../components/BottomWarning";

export const SignIn = () => {
    return <div>
        <Heading label={"Sign In"}/>
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox placeholder="harkirat@gmail.com" label={"Email"}/>
    </div>
}