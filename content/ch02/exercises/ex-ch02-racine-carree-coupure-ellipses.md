---
id: ex-ch02-racine-carree-coupure-ellipses
type: exercise
chapters: [2]
title: Racine carrée sur le plan coupé et intégrales sur un segment
source: "Inventé (problème original ; la question B1 recoupe l'Exercice II.9.5 du poly, les valeurs finales des intégrales sont classiques)"
difficulty: 4
time: 80
tools: [ch02-indice-def, ch02-indice-entier-localement-constant, ch02-primitive-simplement-connexe, ch01-primitive-locale, ch02-invariance-homotopie-integrale, ch02-indice-cercle, ch02-residu-pole-simple, ch02-singularite-effacable-riemann, ch02-puissance-complexe-def, ch01-longueur-majoration-integrale, ch01-derivee-f-rond-gamma]
---
## Énoncé

**Notations.** On note $\Omega=\C\setminus[-1,1]$ (le plan privé du segment réel $[-1,1]$). Pour $v\in\C\setminus\R_-$, $\sqrt v=e^{\frac12\mathrm{Log}\,v}$ désigne la détermination principale de la racine carrée ($\mathrm{Log}$ = détermination principale du logarithme). Pour $\rho>0$, on note $E_\rho$ le lacet $t\mapsto\cosh(\rho+it)=\cosh\rho\cos t+i\sinh\rho\sin t$, $t\in[0,2\pi]$ : il parcourt l'ellipse de foyers $\pm1$ et de demi-axes $\cosh\rho$, $\sinh\rho$. Les cercles $C(0,R)$ sont parcourus dans le sens direct.

**Partie A — Racines $k$-ièmes holomorphes.** Soit $V$ un ouvert connexe de $\C$, $h\in\Hol(V)$ ne s'annulant pas, et $k\ge1$ un entier.

* **A1.** Soit $\gamma$ un lacet de $V$. Montrer que $h\circ\gamma$ est un lacet de $\C\setminus\{0\}$ et que $\dfrac{1}{2i\pi}\displaystyle\int_\gamma\frac{h'(z)}{h(z)}\,dz=\mathrm{Ind}_0(h\circ\gamma)$. En particulier, ce nombre est un entier.
* **A2.** Montrer qu'il existe $g\in\Hol(V)$ telle que $g^k=h$ si et seulement si $\dfrac{1}{2i\pi}\displaystyle\int_\gamma\frac{h'}{h}\,dz\in k\Z$ pour tout lacet $\gamma$ de $V$.

**Partie B — La racine carrée de $z^2-1$ sur $\Omega$.**

* **B1.** Montrer que $\Omega$ est connexe et que, pour tout lacet $\gamma$ de $\Omega$, $\mathrm{Ind}_1(\gamma)=\mathrm{Ind}_{-1}(\gamma)$. En déduire que $z\mapsto z^2-1$ admet une racine carrée holomorphe sur $\Omega$, mais pas de logarithme holomorphe sur $\Omega$.
* **B2.** Montrer qu'il y a exactement deux racines carrées holomorphes de $z^2-1$ sur $\Omega$, opposées l'une de l'autre, et qu'une seule, notée $s$ dans la suite, vérifie $s(2)=\sqrt3$. Montrer que $s(x)=\sqrt{x^2-1}$ pour tout réel $x>1$.
* **B3.** Montrer que pour tout $w\in\C$ tel que $\Re(w)>0$, on a $\cosh w\in\Omega$ et $s(\cosh w)=\sinh w$. En déduire que, pour $\rho>0$, $E_\rho$ est un lacet de $\Omega$ et que $s\big(E_\rho(t)\big)=\sinh(\rho+it)$.
* **B4.** Montrer que $s(z)=z\sqrt{1-1/z^2}$ pour $|z|>1$. En déduire que la fonction $u\mapsto u\,s(1/u)$, définie sur $D(0,1)\setminus\{0\}$, se prolonge en une fonction holomorphe $\varphi$ sur $D(0,1)$, et que $\varphi(u)=1-\frac{u^2}2+O(u^4)$ quand $u\to0$.

**Partie C — Deux intégrales sur $[-1,1]$.** Soit $a>1$ un réel.

* **C1.** Soit $G$ une fonction holomorphe sur $\Omega\setminus\{a\}$ ayant en $a$ un pôle simple. Soient $\rho>0$ tel que $\cosh\rho<a$, et $R>a$. Montrer que
$$
\int_{C(0,R)}G(z)\,dz-\int_{E_\rho}G(z)\,dz=2i\pi\,\mathrm{res}_a(G).
$$
*Indication : retrancher à $G$ sa partie principale en $a$, et construire une homotopie de lacets dans $\Omega$ entre $C(0,R)$ et $E_\rho$.*
* **C2.** En appliquant C1 à $G(z)=\dfrac{1}{(a-z)\,s(z)}$, puis en faisant tendre $R$ vers $+\infty$ et $\rho$ vers $0$, montrer que
$$
\int_{-1}^{1}\frac{dx}{(a-x)\sqrt{1-x^2}}=\frac{\pi}{\sqrt{a^2-1}} .
$$
* **C3.** De même, avec $G(z)=\dfrac{s(z)}{a-z}$, calculer $\displaystyle K(a)=\int_{-1}^{1}\frac{\sqrt{1-x^2}}{a-x}\,dx$.

## Indices

### Indice 1
Partie A : c'est la preuve de l'existence de primitives sur un simplement connexe (on intègre le long d'un chemin depuis un point fixé), mais on n'a besoin que d'une chose : que l'**exponentielle** de $\frac1k\int\frac{h'}{h}$ ne dépende pas du chemin. Partie C : le résidu en $a$ et le comportement à l'infini fournissent deux évaluations de la même intégrale sur l'ellipse, et l'ellipse « s'écrase » sur le segment quand $\rho\to0$.

### Indice 2
B1 : $[-1,1]$ est connexe et ne rencontre pas l'image de $\gamma$ ; $\frac{(z^2-1)'}{z^2-1}=\frac1{z-1}+\frac1{z+1}$. B3 : sur le demi-plan connexe $\{\Re w>0\}$, $s(\cosh w)$ et $\sinh w$ ont le même carré et $\sinh$ ne s'y annule pas. C1 : $H(u,t)=(1-u)Re^{it}+u\cosh(\rho+it)$ ; calculer sa partie imaginaire. $\mathrm{Ind}_a(E_\rho)=0$ car $E_\rho$ reste dans $\bar D(0,\cosh\rho)$.

### Indice 3
C2 : $\mathrm{res}_a(G)=-\frac{1}{s(a)}$ ; $|s(z)|\ge\sqrt{R^2-1}$ sur $C(0,R)$ ; sur l'ellipse, $G(E_\rho(t))E_\rho'(t)=\frac{i}{a-\cosh(\rho+it)}$, puis $x=\cos t$. C3 : avec $u=1/z$, $G(z)=\frac{\varphi(u)}{au-1}=-1-\frac{a}{z}+O\!\left(\frac1{z^2}\right)$, donc $\int_{C(0,R)}G\to-2i\pi a$.

## Corrigé

**A1.** Paramétrons $\gamma$ par $[0,1]$. $h$ est holomorphe donc $C^1$, et $\gamma$ est $C^1$ par morceaux : $h\circ\gamma$ est $C^1$ par morceaux, avec $(h\circ\gamma)'(t)=h'(\gamma(t))\gamma'(t)$ ([[ch01-derivee-f-rond-gamma]]) ; c'est un lacet puisque $\gamma$ en est un, et il évite $0$ car $h$ ne s'annule pas. Par définition de l'indice ([[ch02-indice-def]]),
$$
\mathrm{Ind}_0(h\circ\gamma)=\frac1{2i\pi}\int_0^1\frac{(h\circ\gamma)'(t)}{h(\gamma(t))}\,dt=\frac1{2i\pi}\int_0^1\frac{h'(\gamma(t))}{h(\gamma(t))}\gamma'(t)\,dt=\frac1{2i\pi}\int_\gamma\frac{h'}{h}\,dz,
$$
et l'indice d'un lacet est un entier ([[ch02-indice-entier-localement-constant]]).

**A2.** ($\Rightarrow$) Si $g^k=h$, $g$ ne s'annule pas et $kg^{k-1}g'=h'$, donc $\frac{h'}{h}=k\frac{g'}{g}$. Par A1 appliqué à $g$, $\frac1{2i\pi}\int_\gamma\frac{h'}{h}=k\,\mathrm{Ind}_0(g\circ\gamma)\in k\Z$.

($\Leftarrow$) Fixons $z_0\in V$ et $c\in\C$ tel que $c^k=h(z_0)$ (possible car $h(z_0)\ne0$). Comme dans la preuve du Théorème II.9.1 du poly ([[ch02-primitive-simplement-connexe]]), tout point $\omega$ de l'ouvert connexe $V$ peut être relié à $z_0$ par un chemin $\gamma_\omega$ ; on pose
$$
g(\omega)=c\,\exp\Big(\frac1k\int_{\gamma_\omega}\frac{h'}{h}\,dz\Big).
$$
*Indépendance du chemin.* Si $\gamma'_\omega$ est un autre chemin de $z_0$ à $\omega$, $\gamma'_\omega\vee\gamma_\omega^{opp}$ est un lacet de $V$, donc $\int_{\gamma'_\omega}\frac{h'}h-\int_{\gamma_\omega}\frac{h'}h\in2i\pi k\Z$ par hypothèse ; après division par $k$, la différence est dans $2i\pi\Z$, et les exponentielles coïncident. En particulier $g(z_0)=c$ (chemin constant).

*Holomorphie.* Soit $\omega\in V$ et $D(\omega,r)\subset V$. Sur ce disque, $h'/h$ admet une primitive holomorphe $\Phi$ ([[ch01-primitive-locale]]). Pour $w\in D(\omega,r)$, on choisit le chemin $\gamma_\omega\vee[\omega,w]$ : $\int_{[\omega,w]}\frac{h'}h=\Phi(w)-\Phi(\omega)$, donc $g(w)=g(\omega)\exp\big(\frac1k(\Phi(w)-\Phi(\omega))\big)$, holomorphe sur le disque, avec $g'=\frac1k\frac{h'}{h}g$. Donc $g\in\Hol(V)$, $g$ ne s'annule pas et
$$
\Big(\frac{g^k}{h}\Big)'=\frac{g^k}{h}\Big(k\frac{g'}{g}-\frac{h'}{h}\Big)=0 .
$$
$V$ étant connexe, $g^k/h$ est constante, égale à sa valeur $c^k/h(z_0)=1$ en $z_0$ : $g^k=h$.

**B1.** *Connexité.* Soit $z\in\Omega$ (donc $z\ne0$). Le segment de $z$ à $2z/|z|$ est formé des $\lambda z$, $\lambda$ entre $1$ et $2/|z|$. Si un tel $\lambda z$ était dans $[-1,1]$ : ou bien $\lambda\ge1$ et $z=\frac{\lambda z}{\lambda}\in[-1,1]$, exclu ; ou bien $\lambda<1$, donc $\lambda\ge2/|z|$ et $|\lambda z|\ge2$, exclu. Ce segment relie donc $z$, dans $\Omega$, au cercle $C(0,2)\subset\Omega$, qui est connexe. Donc $\Omega$ est connexe par arcs, donc connexe.

*Indices.* Soit $\gamma$ un lacet de $\Omega$, d'image $\gamma^*$. Le segment $[-1,1]$ est connexe et contenu dans $\C\setminus\gamma^*$, donc dans une seule composante connexe de $\C\setminus\gamma^*$, sur laquelle $z\mapsto\mathrm{Ind}_z(\gamma)$ est constante ([[ch02-indice-entier-localement-constant]]) : $\mathrm{Ind}_1(\gamma)=\mathrm{Ind}_{-1}(\gamma)$.

*Racine carrée.* $h(z)=z^2-1$ est holomorphe et ne s'annule pas sur $\Omega$ (ses zéros $\pm1$ sont dans $[-1,1]$), et
$$
\frac1{2i\pi}\int_\gamma\frac{h'}{h}\,dz=\frac1{2i\pi}\int_\gamma\Big(\frac1{z-1}+\frac1{z+1}\Big)dz=\mathrm{Ind}_1(\gamma)+\mathrm{Ind}_{-1}(\gamma)=2\,\mathrm{Ind}_1(\gamma)\in2\Z .
$$
Par A2 avec $k=2$, $h$ admet une racine carrée holomorphe sur $\Omega$. *Pas de logarithme* : si $h=e^{L}$ avec $L\in\Hol(\Omega)$, alors $L'=h'/h$ et l'intégrale de $h'/h$ sur tout lacet serait nulle ([[ch01-integrale-primitive]]) ; or pour $\gamma=C(0,2)$ elle vaut $2i\pi(\mathrm{Ind}_1+\mathrm{Ind}_{-1})=4i\pi\ne0$ ([[ch02-indice-cercle]]).

**B2.** Soient $s_1,s_2$ deux racines carrées holomorphes de $z^2-1$ sur $\Omega$. $s_1$ ne s'annule pas, $(s_2/s_1)^2=1$, donc la fonction continue $s_2/s_1$ est à valeurs dans $\{-1,1\}$ sur le connexe $\Omega$ : elle est constante, $s_2=\pm s_1$. Il y a donc exactement deux racines carrées (si $s_1$ en est une, $-s_1$ aussi et $-s_1\ne s_1$). Comme $s_1(2)^2=3$, $s_1(2)=\pm\sqrt3$, et exactement une des deux vaut $\sqrt3$ en $2$ : c'est $s$.

Sur l'intervalle connexe $]1,+\infty[\subset\Omega$, $s(x)^2=x^2-1>0$, donc $s(x)$ est réel non nul ; par continuité, $s$ y garde un signe constant, positif puisque $s(2)>0$. Donc $s(x)=\sqrt{x^2-1}$ pour $x>1$.

**B3.** Écrivons $w=\alpha+i\beta$ avec $\alpha>0$ : $\cosh w=\cosh\alpha\cos\beta+i\sinh\alpha\sin\beta$. Si $\cosh w$ était réel, on aurait $\sin\beta=0$ (car $\sinh\alpha>0$), donc $\cos\beta=\pm1$ et $|\cosh w|=\cosh\alpha>1$ : dans tous les cas $\cosh w\notin[-1,1]$, c'est-à-dire $\cosh w\in\Omega$.

Sur le demi-plan $\Pi=\{\Re w>0\}$ (convexe, donc connexe), $\sigma(w)=s(\cosh w)$ est holomorphe (composée) et $\sigma^2=\cosh^2w-1=\sinh^2w$. Les zéros de $\sinh$ sont les $ik\pi$, hors de $\Pi$ ; donc, comme en B2, $\sigma/\sinh$ est continue à valeurs dans $\{\pm1\}$ sur le connexe $\Pi$, donc constante. Pour $w=\rho>0$ réel, $\cosh\rho>1$ donc $\sigma(\rho)=\sqrt{\cosh^2\rho-1}=\sinh\rho$ (B2) : la constante vaut $1$ et $s(\cosh w)=\sinh w$ sur $\Pi$.

Pour $\rho>0$, $t\mapsto\cosh(\rho+it)$ est $C^1$, $2\pi$-périodique, et $\rho+it\in\Pi$ : $E_\rho$ est un lacet de $\Omega$, $s(E_\rho(t))=\sinh(\rho+it)$, et $E_\rho'(t)=i\sinh(\rho+it)$.

**B4.** Pour $|z|>1$, $v=1/z^2\in D(0,1)$, donc $1-v\in D(1,1)\subset\{\Re>0\}\subset\C\setminus\R_-$ : $\omega(z)=\sqrt{1-1/z^2}$ est holomorphe sur $\{|z|>1\}$ et $\big(z\,\omega(z)\big)^2=z^2-1$. L'ouvert $\{|z|>1\}$ est connexe et contenu dans $\Omega$ ; comme en B2, $z\,\omega(z)=\pm s(z)$ sur cet ouvert, et en $z=2$ on a $2\sqrt{3/4}=\sqrt3=s(2)$ : donc $s(z)=z\sqrt{1-1/z^2}$ pour $|z|>1$.

Pour $0<|u|<1$, $|1/u|>1$ et $u\,s(1/u)=u\cdot\frac1u\sqrt{1-u^2}=\sqrt{1-u^2}$. Or $u\mapsto\sqrt{1-u^2}$ est holomorphe sur tout $D(0,1)$ ($1-u^2\in D(1,1)$) : c'est le prolongement $\varphi$ cherché (ou : la fonction est bornée près de $0$, [[ch02-singularite-effacable-riemann]]). Enfin $\varphi(0)=1$ ; $\varphi^2=1-u^2$ donne $2\varphi\varphi'=-2u$, d'où $\varphi'(0)=0$ et, en dérivant encore, $2\varphi'^2+2\varphi\varphi''=-2$, d'où $\varphi''(0)=-1$ ; $\varphi(u)=\sqrt{1-u^2}$ étant paire (elle ne dépend que de $u^2$), son développement de Taylor ne contient que des puissances paires : $\varphi(u)=1-\frac{u^2}{2}+O(u^4)$. Autrement dit, $s(z)=z\,\varphi(1/z)=z-\frac{1}{2z}+O\big(\frac1{z^3}\big)$ à l'infini.

**C1.** *Partie principale.* En $a$ (pôle simple), le développement de Laurent s'écrit $G(z)=\frac{c}{z-a}+\big(\text{holomorphe près de }a\big)$ avec $c=\mathrm{res}_a(G)$ ; donc $g=G-\frac{c}{z-a}$ est holomorphe sur $\Omega\setminus\{a\}$ et bornée près de $a$ : elle se prolonge en $g\in\Hol(\Omega)$ ([[ch02-singularite-effacable-riemann]]).

*Homotopie.* Pour $(u,t)\in[0,1]\times[0,2\pi]$, posons $H(u,t)=(1-u)Re^{it}+u\cosh(\rho+it)$. $H$ est continue, $H(0,\cdot)=C(0,R)$, $H(1,\cdot)=E_\rho$ et $H(u,0)=H(u,2\pi)$. De plus
$$
\Im H(u,t)=\big((1-u)R+u\sinh\rho\big)\sin t,\qquad\Re H(u,t)=\big((1-u)R+u\cosh\rho\big)\cos t .
$$
Le coefficient de $\sin t$ est $>0$ ; si $H(u,t)$ est réel, alors $\sin t=0$, $\cos t=\pm1$ et $|H(u,t)|=(1-u)R+u\cosh\rho\ge\min(R,\cosh\rho)>1$. Donc $H$ est à valeurs dans $\Omega$ : c'est une homotopie de lacets dans $\Omega$ (après reparamétrage de $[0,2\pi]$ en $[0,1]$), et par invariance par homotopie ([[ch02-invariance-homotopie-integrale]]) $\int_{C(0,R)}g=\int_{E_\rho}g$.

*Indices de $a$.* $\mathrm{Ind}_a(C(0,R))=1$ car $|a|<R$ ([[ch02-indice-cercle]]). Pour l'ellipse, $|E_\rho(t)|^2=\cosh^2\rho\cos^2t+\sinh^2\rho\sin^2t\le\cosh^2\rho$ : l'ensemble $\{|z|>\cosh\rho\}$ est connexe, non borné, disjoint de l'image de $E_\rho$, et contient $a$ ; il est donc dans la composante non bornée de $\C\setminus E_\rho^*$, où l'indice est nul ([[ch02-indice-entier-localement-constant]]) : $\mathrm{Ind}_a(E_\rho)=0$. Finalement
$$
\int_{C(0,R)}G-\int_{E_\rho}G=\int_{C(0,R)}g-\int_{E_\rho}g+c\Big(\int_{C(0,R)}\frac{dz}{z-a}-\int_{E_\rho}\frac{dz}{z-a}\Big)=0+c\,(2i\pi-0)=2i\pi\,\mathrm{res}_a(G).
$$

**C2.** *Hypothèses de C1.* $s$ ne s'annule pas sur $\Omega$, donc $G=\frac{1}{(a-z)s(z)}$ est holomorphe sur $\Omega\setminus\{a\}$ ; en $a$, $G(z)=\frac{-1/s(z)}{z-a}$ avec $-1/s$ holomorphe en $a$, non nulle : pôle simple, et ([[ch02-residu-pole-simple]])
$$
\mathrm{res}_a(G)=-\frac{1}{s(a)}=-\frac{1}{\sqrt{a^2-1}}\quad\text{(B2)}.
$$

*Grand cercle.* Pour $|z|=R>a$ : $|a-z|\ge R-a$ et, par B4, $|s(z)|^2=|z|^2\,|1-1/z^2|\ge R^2(1-1/R^2)=R^2-1$. Donc ([[ch01-longueur-majoration-integrale]]) $\left|\int_{C(0,R)}G\right|\le\frac{2\pi R}{(R-a)\sqrt{R^2-1}}\to0$. Fixons $\rho$ avec $\cosh\rho<a$ : par C1, $\int_{E_\rho}G=\int_{C(0,R)}G+\frac{2i\pi}{\sqrt{a^2-1}}$ pour tout $R>a$ ; le membre de gauche ne dépend pas de $R$, et en faisant $R\to+\infty$ :
$$
\int_{E_\rho}G(z)\,dz=\frac{2i\pi}{\sqrt{a^2-1}} .
$$

*Ellipse.* Par B3, $G(E_\rho(t))E'_\rho(t)=\frac{i\sinh(\rho+it)}{(a-\cosh(\rho+it))\sinh(\rho+it)}=\frac{i}{a-\cosh(\rho+it)}$, donc $\int_{E_\rho}G=i\int_0^{2\pi}\frac{dt}{a-\cosh(\rho+it)}$. Fixons $\rho_1>0$ avec $\cosh\rho_1<a$. Pour $0\le\rho\le\rho_1$, $|\cosh(\rho+it)|\le\cosh\rho\le\cosh\rho_1<a$, donc $(\rho,t)\mapsto\frac{1}{a-\cosh(\rho+it)}$ est continue sur le compact $[0,\rho_1]\times[0,2\pi]$, donc uniformément continue, et l'intégrale en $t$ est une fonction continue de $\rho\in[0,\rho_1]$. Elle est constante égale à $\frac{2\pi}{\sqrt{a^2-1}}$ sur $]0,\rho_1]$, donc aussi en $\rho=0$ :
$$
\int_0^{2\pi}\frac{dt}{a-\cos t}=\frac{2\pi}{\sqrt{a^2-1}} .
$$

*Retour au segment.* Le changement $t\mapsto2\pi-t$ montre que $\int_0^{2\pi}=2\int_0^{\pi}$ ; sur $]0,\pi[$, $x=\cos t$ est un $C^1$-difféomorphisme sur $]-1,1[$, avec $dx=-\sin t\,dt$ et $\sin t=\sqrt{1-x^2}$. Donc (intégrale impropre convergente, $\frac1{\sqrt{1-x^2}}$ étant intégrable sur $]-1,1[$)
$$
\int_{-1}^{1}\frac{dx}{(a-x)\sqrt{1-x^2}}=\int_0^\pi\frac{dt}{a-\cos t}=\frac{\pi}{\sqrt{a^2-1}} .
$$

**C3.** $G(z)=\frac{s(z)}{a-z}$ est holomorphe sur $\Omega\setminus\{a\}$, avec en $a$ un pôle simple ($s(a)\ne0$) et $\mathrm{res}_a(G)=-s(a)=-\sqrt{a^2-1}$.

*Grand cercle.* Pour $|z|>a$, posons $u=1/z\in D(0,1/a)\setminus\{0\}$ : par B4, $s(z)=\varphi(u)/u$, donc $G(z)=\frac{\varphi(u)/u}{a-1/u}=\frac{\varphi(u)}{au-1}=:\psi(u)$, où $\psi$ est holomorphe sur $D(0,1/a)$. On a $\psi(0)=-1$ et $\psi'(0)=\frac{\varphi'(0)(0-1)-a\varphi(0)}{(0-1)^2}=-a$. Donc $\psi(u)=-1-au+u^2\chi(u)$ avec $\chi$ holomorphe sur $D(0,1/a)$, bornée par une constante $M$ sur $\bar D(0,1/R_0)$ pour un $R_0>a$ fixé. Pour $R\ge R_0$ :
$$
\int_{C(0,R)}G=\int_{C(0,R)}(-1)\,dz-a\int_{C(0,R)}\frac{dz}{z}+\int_{C(0,R)}\frac{\chi(1/z)}{z^2}\,dz=0-2i\pi a+\eps_R,\qquad |\eps_R|\le2\pi R\cdot\frac{M}{R^2}\to0 .
$$
Par C1, $\int_{E_\rho}G=\int_{C(0,R)}G-2i\pi\,\mathrm{res}_a(G)=\int_{C(0,R)}G+2i\pi\sqrt{a^2-1}$ pour tout $R>a$ ; en faisant $R\to+\infty$ :
$$
\int_{E_\rho}G(z)\,dz=-2i\pi\big(a-\sqrt{a^2-1}\big).
$$

*Ellipse.* Par B3, $G(E_\rho(t))E'_\rho(t)=\frac{i\sinh^2(\rho+it)}{a-\cosh(\rho+it)}$, continue sur $[0,\rho_1]\times[0,2\pi]$ comme en C2. En $\rho=0$, $\sinh^2(it)=(i\sin t)^2=-\sin^2t$, d'où
$$
-i\int_0^{2\pi}\frac{\sin^2t}{a-\cos t}\,dt=-2i\pi\big(a-\sqrt{a^2-1}\big).
$$
Comme en C2, $\int_0^{2\pi}\frac{\sin^2t}{a-\cos t}dt=2\int_0^\pi\frac{\sin t}{a-\cos t}\sin t\,dt=2\int_{-1}^1\frac{\sqrt{1-x^2}}{a-x}\,dx=2K(a)$. Donc
$$
K(a)=\int_{-1}^{1}\frac{\sqrt{1-x^2}}{a-x}\,dx=\pi\big(a-\sqrt{a^2-1}\big).
$$
Contrôle : quand $a\to+\infty$, $K(a)=\frac{\pi}{a+\sqrt{a^2-1}}\sim\frac{\pi}{2a}$, et en effet $\int_{-1}^1\frac{\sqrt{1-x^2}}{a}dx=\frac{\pi}{2a}$. Les deux formules ont été vérifiées numériquement (par ex. $a=2$ : $\pi/\sqrt3\approx1{,}8138$ et $\pi(2-\sqrt3)\approx0{,}8418$).

## Pièges et variantes

* A2 : l'hypothèse « $\frac1{2i\pi}\int_\gamma\frac{h'}h\in k\Z$ » sert **uniquement** à rendre $\exp\big(\frac1k\int\frac{h'}h\big)$ indépendante du chemin ; la primitive $\frac1k\int\frac{h'}{h}$, elle, n'est pas bien définie sur $\Omega$ (c'est pour cela qu'il n'y a pas de logarithme). Ne pas confondre « racine $k$-ième » et « logarithme » : le second demande des périodes **nulles**.
* B1 : $\Omega$ n'est **pas** simplement connexe (le cercle $C(0,2)$ n'y est pas homotope à un lacet constant, sinon $\int_{C(0,2)}\frac{2z}{z^2-1}dz$ serait nulle) ; la Proposition II.9.3 ne s'applique pas, c'est tout l'intérêt de la partie A.
* B2–B3 : l'égalité $s(\cosh w)=\sinh w$ (et pas $-\sinh w$) se décide par **un** point et la connexité ; oublier ce choix de signe change le signe des intégrales finales.
* C1 : sans soustraire la partie principale, on ne peut pas appliquer l'invariance par homotopie, car $G$ n'est pas holomorphe sur $\Omega$ et l'homotopie traverse le point $a$. Vérifier aussi que l'homotopie reste **hors du segment** : c'est le calcul de $\Im H$.
* C2–C3 : l'ellipse joue le rôle d'un contour « en os de chien » collé au segment, mais sans petits cercles autour de $\pm1$ ni valeurs au bord de $s$ sur la coupure à justifier : le passage $\rho\to0$ est une simple continuité d'intégrale à paramètre.
* Variante : avec $G(z)=\frac{z^{2}}{s(z)}$ (aucun pôle dans $\Omega$, $G(z)=z+\frac{1}{2z}+O(z^{-3})$), on obtient $\int_{-1}^1\frac{x^2\,dx}{\sqrt{1-x^2}}=\frac{\pi}{2}$ ; plus généralement le coefficient de $1/z$ du développement à l'infini donne l'intégrale sur le segment.
