import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [activeTab, setActiveTab] = useState("government");
  const [viewMode, setViewMode] = useState<"register" | "login">("register");

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-primary">
            Health Data Information Management System
          </DialogTitle>
        </DialogHeader>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="government" className="data-[state=active]:bg-gray-400 data-[state=active]:text-white">
              Government
            </TabsTrigger>
            <TabsTrigger value="medical" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Medical Facility
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="government" className="space-y-4 mt-6">
            {viewMode === "register" ? (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="govt-state">State</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="STATE" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="maharashtra">Maharashtra</SelectItem>
                      <SelectItem value="karnataka">Karnataka</SelectItem>
                      <SelectItem value="gujarat">Gujarat</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="govt-admin">Admin Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="ADMIN TYPE" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="state">State Admin</SelectItem>
                      <SelectItem value="district">District Admin</SelectItem>
                      <SelectItem value="block">Block Admin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="govt-verification">Verification ID</Label>
                  <Input id="govt-verification" placeholder="VERIFICATION ID" />
                </div>
                
                <div>
                  <Label htmlFor="govt-password">Password</Label>
                  <Input id="govt-password" type="password" placeholder="PASSWORD" />
                </div>
                
                <div>
                  <Label htmlFor="govt-confirm">Confirm Password</Label>
                  <Input id="govt-confirm" type="password" placeholder="CONFIRM PASSWORD" />
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Already Registered?</p>
                  <Button 
                    variant="link" 
                    className="text-primary p-0 h-auto"
                    onClick={() => setViewMode("login")}
                  >
                    LOGIN
                  </Button>
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/80">
                  Register
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="text-center text-muted-foreground mb-6">Login as an Admin</h3>
                
                <div>
                  <Label htmlFor="login-verification">Verification ID</Label>
                  <Input id="login-verification" placeholder="VERIFICATION ID" />
                </div>
                
                <div>
                  <Label htmlFor="login-password">Password</Label>
                  <Input id="login-password" type="password" placeholder="PASSWORD" />
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/80">
                  Login
                </Button>
                
                <div className="text-center">
                  <Button 
                    variant="link" 
                    className="text-primary text-sm"
                    onClick={() => setViewMode("register")}
                  >
                    Forgot Password?
                  </Button>
                </div>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="medical" className="space-y-4 mt-6">
            {viewMode === "register" ? (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="med-facility">Facility Name</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="FACILITY NAME" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hospital1">City Hospital</SelectItem>
                      <SelectItem value="hospital2">General Hospital</SelectItem>
                      <SelectItem value="hospital3">Medical Center</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="med-state">State</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="STATE" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="maharashtra">Maharashtra</SelectItem>
                      <SelectItem value="karnataka">Karnataka</SelectItem>
                      <SelectItem value="gujarat">Gujarat</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="med-verification">Verification ID</Label>
                  <Input id="med-verification" placeholder="VERIFICATION ID" />
                </div>
                
                <div>
                  <Label htmlFor="med-password">Password</Label>
                  <Input id="med-password" type="password" placeholder="PASSWORD" />
                </div>
                
                <div>
                  <Label htmlFor="med-confirm">Confirm Password</Label>
                  <Input id="med-confirm" type="password" placeholder="CONFIRM PASSWORD" />
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Already Registered?</p>
                  <Button 
                    variant="link" 
                    className="text-primary p-0 h-auto"
                    onClick={() => setViewMode("login")}
                  >
                    LOGIN
                  </Button>
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/80">
                  Register
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="text-center text-muted-foreground mb-6">Login as a Facility</h3>
                
                <div>
                  <Label htmlFor="med-login-verification">Verification ID</Label>
                  <Input id="med-login-verification" placeholder="VERIFICATION ID" />
                </div>
                
                <div>
                  <Label htmlFor="med-login-password">Password</Label>
                  <Input id="med-login-password" type="password" placeholder="PASSWORD" />
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/80">
                  Login
                </Button>
                
                <div className="text-center">
                  <Button 
                    variant="link" 
                    className="text-primary text-sm"
                    onClick={() => setViewMode("register")}
                  >
                    Forgot Password?
                  </Button>
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;