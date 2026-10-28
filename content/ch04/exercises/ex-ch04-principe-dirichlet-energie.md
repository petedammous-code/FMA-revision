---
id: ex-ch04-principe-dirichlet-energie
type: exercise
chapters: [4, 5, 1]
title: Énergie de Dirichlet — principe de Dirichlet et invariance conforme
source: "Inventé (sur le thème classique du principe de Dirichlet)"
difficulty: 4
time: 85
tools: [ch05-differentielle-def, ch05-differentielle-bilineaire, ch05-differentielle-nulle-constante, ch04-harmonique-def, ch04-holomorphe-implique-harmonique, ch04-maximum-unicite-bord, ch04-harmonique-moyenne-maximum, ch04-composition-harmonique-holomorphe, ch04-harmoniques-radiales, ch01-cauchy-riemann, ch01-similitude-conforme, ch01-automorphismes-disque, ch01-serie-entiere-holomorphe]
---
## Énoncé

**Notations et rappels.** On identifie $\C$ à $\R^2$ ($z=x+iy$) ; $D=D(0,1)$. Toutes les fonctions $u,v,h,\dots$ sont **à valeurs réelles**.

* Si $U$ est un ouvert et $u$ de classe $C^1$ sur $U$, on note $|\nabla u|^2=u_x^2+u_y^2$ et on appelle **énergie de Dirichlet** de $u$ sur $U$
$$
E_U(u)=\iint_U|\nabla u|^2\,dx\,dy\ \in[0,+\infty].
$$
* Pour $\Omega$ ouvert borné et $k\ge1$, $\mathcal C^k(\bar\Omega)$ désigne l'ensemble des restrictions à $\bar\Omega$ des fonctions de classe $C^k$ sur un ouvert contenant $\bar\Omega$. On note $X=\mathcal C^1(\bar D)$, muni de la norme $\norm{u}=\sup_{\bar D}|u|+\sup_{\bar D}|\nabla u|$, et $X_0=\{h\in X : h=0\text{ sur }C(0,1)\}$. On écrit $E=E_D$.
* **(Admis — formule de Green.)** Si $u\in\mathcal C^2(\bar D)$ et $h\in X_0$, alors $\displaystyle\iint_D\nabla u\cdot\nabla h\,dx\,dy=-\iint_D h\,\Delta u\,dx\,dy$, où $\nabla u\cdot\nabla h=u_xh_x+u_yh_y$.
* **(Admis — changement de variables.)** Si $\phi:U\to V$ est un $C^1$-difféomorphisme entre ouverts de $\R^2$, de matrice jacobienne $J_\phi$, et $g:V\to[0,+\infty[$ est continue, alors $\displaystyle\iint_Vg=\iint_U(g\circ\phi)\,|\det J_\phi|$ (égalité dans $[0,+\infty]$).
* **(Rappel — coordonnées polaires.)** Si $v$ est $C^1$ et $\tilde v(r,\theta)=v(re^{i\theta})$, alors $|\nabla v|^2=(\partial_r\tilde v)^2+\frac{1}{r^2}(\partial_\theta\tilde v)^2$ en tout point $re^{i\theta}$, $r>0$.

**Partie A — Différentielle de l'énergie.**

1. Montrer que $E$ est différentiable sur l'espace vectoriel normé $(X,\norm{\cdot})$ et que $dE_u(h)=2\iint_D\nabla u\cdot\nabla h$ pour $u,h\in X$.
2. Soit $u\in\mathcal C^2(\bar D)$. Montrer que $u$ est harmonique sur $D$ si et seulement si $dE_u(h)=0$ pour tout $h\in X_0$.
3. **(Principe de Dirichlet.)** Soit $u\in\mathcal C^2(\bar D)$ harmonique sur $D$ et $v\in X$ telle que $v=u$ sur $C(0,1)$. Montrer que $E(v)=E(u)+E(v-u)$, puis que $E(v)\ge E(u)$, avec égalité si et seulement si $v=u$.

**Partie B — Énergie d'une partie réelle.**

4. Soit $F$ holomorphe sur un ouvert $U$ et $u=\Re(F)$. Montrer que $|\nabla u|^2=|F'|^2$ sur $U$.
5. Soit $F(z)=\sum_{n\ge0}a_nz^n$ une série entière de rayon de convergence $\rho>1$ et $u=\Re(F)$. Montrer que $E(u)=\pi\sum_{n\ge1}n|a_n|^2$.
6. Soit $k\ge1$ un entier. Déterminer l'unique $u_k\in\mathcal C^2(\bar D)$ harmonique sur $D$ telle que $u_k(e^{i\theta})=\cos(k\theta)$ pour tout $\theta$, et calculer $E(u_k)$. On pose $v_k(re^{i\theta})=r^2\cos(k\theta)$ (et $v_k(0)=0$) ; on admet que $v_k$ est de classe $C^1$ sur $\R^2$. Calculer $E(v_k)$ et vérifier le principe de Dirichlet sur cet exemple. Pour quel $k$ a-t-on égalité ?

**Partie C — Invariance conforme.**

7. Soit $\phi:U\to V$ un biholomorphisme entre deux ouverts de $\C$ et $u$ de classe $C^1$ sur $V$. Montrer que $|\nabla(u\circ\phi)|^2=\big(|\nabla u|^2\circ\phi\big)\,|\phi'|^2$ sur $U$, que $\det J_\phi=|\phi'|^2$, et en déduire $E_U(u\circ\phi)=E_V(u)$.
8. (a) Pour $a\in D$, on note $f_a(z)=\frac{z-a}{1-\bar az}$. Calculer $E(\Re(f_a))$ de deux façons : par la question 7, puis par la question 5.
   (b) Montrer que si $F$ est holomorphe et **injective** sur un ouvert $U$, alors $E_U(\Re(F))$ est l'aire de $F(U)$.
9. Pour $0<\rho<1$, soit $A_\rho=\{w\in\C:\rho<|w|<1\}$ et $T_\rho(w)=\dfrac{\ln|w|}{\ln\rho}$.
   (a) Vérifier que $T_\rho$ est harmonique sur $A_\rho$ et calculer $E_{A_\rho}(T_\rho)$.
   (b) Soient $0<\rho,\sigma<1$ et $\phi:A_\rho\to A_\sigma$ un biholomorphisme tel que $|\phi(w)|\to1$ quand $|w|\to1$ et $|\phi(w)|\to\sigma$ quand $|w|\to\rho$ ($w\in A_\rho$). Montrer que $T_\sigma\circ\phi=T_\rho$ et en déduire que $\rho=\sigma$.

## Indices

### Indice 1
Partie A : $E(u)=B(u,u)$ où $B(u,v)=\iint_D\nabla u\cdot\nabla v$ est bilinéaire symétrique continue sur $X$ ; développer $E(u+h)$. Pour le sens réciproque de A2, raisonner par l'absurde avec une fonction « bosse » $h$ de classe $C^1$ à support dans un petit disque où $\Delta u$ garde un signe, par exemple $h(z)=(r^2-|z-p|^2)^2$ sur $D(p,r)$ et $0$ ailleurs.

### Indice 2
Partie B : Cauchy–Riemann donne $F'=u_x-iu_y$. Pour B5, calculer d'abord $\int_0^{2\pi}|F'(re^{i\theta})|^2d\theta$ en développant le produit $F'\overline{F'}$ (orthogonalité des $e^{in\theta}$), puis intégrer en $r\,dr$. Pour B6, $u_k$ est la partie réelle d'un monôme.

### Indice 3
Partie C : la matrice jacobienne d'une fonction holomorphe est une similitude directe de rapport $|\phi'|$ ; la règle de la chaîne donne $\nabla(u\circ\phi)=J_\phi^{\,T}\,(\nabla u\circ\phi)$. Pour C8(a), le développement en série de $f_a$ s'obtient avec la série géométrique.

### Indice 4
C9(b) : $g=T_\sigma\circ\phi-T_\rho$ est harmonique sur $A_\rho$ (composition) et tend vers $0$ au bord ; principe du maximum sur le compact $\bar A_\rho$. Puis comparer les énergies grâce à C7.

## Corrigé

**A1.** Posons $B(u,v)=\iint_D\nabla u\cdot\nabla v$ pour $u,v\in X$ (intégrale d'une fonction continue sur $\bar D$). $B$ est bilinéaire symétrique et, par Cauchy–Schwarz dans $\R^2$, $|\nabla u\cdot\nabla v|\le|\nabla u|\,|\nabla v|\le\norm u\norm v$, d'où $|B(u,v)|\le\pi\norm u\norm v$ : $B$ est continue. Pour $u,h\in X$,
$$
E(u+h)-E(u)-2B(u,h)=B(h,h),\qquad 0\le B(h,h)\le\pi\norm h^2=o(\norm h).
$$
L'application $h\mapsto2B(u,h)$ est linéaire et continue ($|2B(u,h)|\le2\pi\norm u\norm h$). Par définition ([[ch05-differentielle-def]], poly, Définition V.3.1, p. 98), $E$ est différentiable en $u$ et $dE_u(h)=2B(u,h)=2\iint_D\nabla u\cdot\nabla h$. (C'est le calcul de l'Exemple V.3.6 du poly, p. 99, appliqué à $B$ et composé avec $u\mapsto(u,u)$ : [[ch05-differentielle-bilineaire]].)

**A2.** ($\Rightarrow$) Si $\Delta u=0$ sur $D$, la formule de Green donne, pour $h\in X_0$, $dE_u(h)=-2\iint_Dh\,\Delta u=0$.

($\Leftarrow$) Supposons $dE_u(h)=0$ pour tout $h\in X_0$, donc $\iint_Dh\,\Delta u=0$ pour tout $h\in X_0$ (Green). Supposons par l'absurde qu'il existe $p\in D$ avec $\Delta u(p)\neq0$ ; quitte à remplacer $u$ par $-u$, $\Delta u(p)>0$. Comme $u$ est $C^2$ sur un voisinage de $\bar D$, $\Delta u$ est continue : il existe $r>0$ tel que $\bar D(p,r)\subset D$ et $\Delta u>0$ sur $\bar D(p,r)$. Soit $\chi:\R\to\R$, $\chi(t)=(r^2-t)^2$ pour $t\le r^2$ et $\chi(t)=0$ pour $t\ge r^2$ : $\chi$ est $C^1$ (les deux morceaux et leurs dérivées $-2(r^2-t)$ et $0$ se raccordent en $t=r^2$). Donc $h(z)=\chi(|z-p|^2)$ est $C^1$ sur $\R^2$, positive, strictement positive sur $D(p,r)$, nulle hors de $D(p,r)$, en particulier sur $C(0,1)$ : $h\in X_0$. Mais alors $h\,\Delta u$ est continue, positive, et strictement positive sur $D(p,r)$, donc $\iint_Dh\,\Delta u>0$ : contradiction. Ainsi $\Delta u=0$ sur $D$ et $u$ est harmonique ([[ch04-harmonique-def]], poly, Définition IV.2.1, p. 76).

**A3.** Posons $h=v-u$. Comme $u\in\mathcal C^2(\bar D)\subset X$, $h\in X$, et $h=0$ sur $C(0,1)$ : $h\in X_0$. Par le calcul de A1 puis A2 ($u$ harmonique),
$$
E(v)=E(u+h)=E(u)+dE_u(h)+E(h)=E(u)+E(h)=E(u)+E(v-u).
$$
Donc $E(v)\ge E(u)$. Si $E(v)=E(u)$, alors $E(h)=\iint_D|\nabla h|^2=0$ ; l'intégrande est continu et positif, donc $\nabla h=0$ sur $D$ ; $D$ étant connexe, $h$ est constante sur $D$ ([[ch05-differentielle-nulle-constante]], poly, Corollaire V.4.5, p. 104), et par continuité sur $\bar D$ cette constante est la valeur $0$ prise sur $C(0,1)$. Donc $v=u$. Réciproquement $v=u$ donne l'égalité.

> 💡 Les fonctions harmoniques sont exactement les points critiques de l'énergie (A2, une « équation d'Euler–Lagrange » pour $E$), et comme $E$ est une forme quadratique positive, tout point critique est un minimum global strict à bord fixé (A3). C'est ainsi qu'un film élastique tendu sur un cadre prend une forme harmonique.

**B4.** Écrivons $F=u+iw$. Les conditions de Cauchy réelles ([[ch01-cauchy-riemann]], poly, Corollaire I.2.4, p. 8) donnent $w_x=-u_y$ et $F'=\partial_xF=u_x+iw_x=u_x-iu_y$, donc $|F'|^2=u_x^2+u_y^2=|\nabla u|^2$.

**B5.** $F$ est holomorphe sur $D(0,\rho)\supset\bar D$, de dérivée $F'(z)=\sum_{n\ge1}na_nz^{n-1}$, série de même rayon $\rho$ ([[ch01-serie-entiere-holomorphe]], poly, Proposition I.3.3, p. 11) ; en particulier $u\in\mathcal C^2(\bar D)$ et $M:=\sum_{n\ge1}n|a_n|<+\infty$ (convergence absolue en $z=1$, car $1<\rho$). Pour $0\le r\le1$,
$$
|F'(re^{i\theta})|^2=\sum_{n,m\ge1}nm\,a_n\bar a_m\,r^{n+m-2}e^{i(n-m)\theta},
$$
série double dont le terme général est majoré par $n|a_n|\,m|a_m|$, de somme $M^2<\infty$ : elle converge normalement en $\theta$ et on peut intégrer terme à terme. Comme $\int_0^{2\pi}e^{i(n-m)\theta}d\theta=2\pi$ si $n=m$ et $0$ sinon,
$$
\int_0^{2\pi}|F'(re^{i\theta})|^2\,d\theta=2\pi\sum_{n\ge1}n^2|a_n|^2r^{2n-2}.
$$
Par B4 et les coordonnées polaires,
$$
E(u)=\int_0^1\Big(\int_0^{2\pi}|F'(re^{i\theta})|^2d\theta\Big)r\,dr=2\pi\sum_{n\ge1}n^2|a_n|^2\int_0^1r^{2n-1}dr=\pi\sum_{n\ge1}n|a_n|^2,
$$
l'interversion $\int_0^1\sum=\sum\int_0^1$ étant justifiée par la convergence normale sur $[0,1]$ ($n^2|a_n|^2r^{2n-1}\le(n|a_n|)^2$ et $\sum(n|a_n|)^2\le M^2$).

**B6.** *Existence.* $u_k=\Re(z^k)$, soit $u_k(re^{i\theta})=r^k\cos(k\theta)$, est $C^\infty$ sur $\R^2$, harmonique comme partie réelle d'une fonction holomorphe ([[ch04-holomorphe-implique-harmonique]], poly, p. 76), et $u_k(e^{i\theta})=\cos(k\theta)$. *Unicité.* Deux solutions sont harmoniques sur le connexe borné $D$, continues sur $\bar D$ et égales sur $C(0,1)$, donc égales ([[ch04-maximum-unicite-bord]], poly, Remarque IV.2.6, p. 77). *Énergie.* Par B5 avec $a_k=1$ et les autres $a_n$ nuls : $E(u_k)=\pi k$.

*La fonction $v_k$.* $v_k\in X$ (admis) et $v_k(e^{i\theta})=\cos(k\theta)=u_k(e^{i\theta})$. En polaires, $\partial_r\tilde v_k=2r\cos(k\theta)$ et $\partial_\theta\tilde v_k=-kr^2\sin(k\theta)$, donc $|\nabla v_k|^2=4r^2\cos^2(k\theta)+k^2r^2\sin^2(k\theta)$. Avec $\int_0^{2\pi}\cos^2(k\theta)d\theta=\int_0^{2\pi}\sin^2(k\theta)d\theta=\pi$ ($k\ge1$),
$$
E(v_k)=\int_0^1\pi(4+k^2)r^2\cdot r\,dr=\frac{\pi(4+k^2)}{4}.
$$
*Vérification.* $E(v_k)-E(u_k)=\frac{\pi}{4}(k^2-4k+4)=\frac{\pi(k-2)^2}{4}\ge0$, conformément à A3, avec égalité si et seulement si $k=2$ — et en effet $v_2=r^2\cos2\theta=x^2-y^2=u_2$, conformément au cas d'égalité de A3. (Contrôle supplémentaire : on vérifie directement que $E(v_k-u_k)=\pi\int_0^1\big(r\,\varphi'(r)^2+k^2\varphi(r)^2/r\big)dr=\frac{\pi(k-2)^2}{4}$ pour $\varphi(r)=r^2-r^k$, comme le prédit l'identité $E(v)=E(u)+E(v-u)$.)

**C7.** Un biholomorphisme a une dérivée qui ne s'annule pas : $(\phi^{-1})'(\phi(z))\,\phi'(z)=1$ par dérivation de $\phi^{-1}\circ\phi=\mathrm{id}$. Notons $\phi'(z)=\alpha+i\beta\neq0$. Par Cauchy–Riemann, $J_\phi(z)=\begin{pmatrix}\alpha&-\beta\\\beta&\alpha\end{pmatrix}$ ([[ch01-similitude-conforme]], poly, Remarque I.2.5, p. 8), donc $\det J_\phi(z)=\alpha^2+\beta^2=|\phi'(z)|^2$. La règle de la chaîne donne $d(u\circ\phi)_z=du_{\phi(z)}\circ d\phi_z$, soit en gradients $\nabla(u\circ\phi)(z)=J_\phi(z)^T\,\nabla u(\phi(z))$. Or $J_\phi(z)^T=\begin{pmatrix}\alpha&\beta\\-\beta&\alpha\end{pmatrix}$ est la matrice de la multiplication par $\overline{\phi'(z)}$, qui multiplie les normes par $|\phi'(z)|$. D'où
$$
|\nabla(u\circ\phi)(z)|^2=|\phi'(z)|^2\,|\nabla u(\phi(z))|^2 .
$$
Enfin $\phi$ est un $C^1$-difféomorphisme ($\phi$ et $\phi^{-1}$ holomorphes, donc $C^1$), et le changement de variables appliqué à $g=|\nabla u|^2\ge0$ continue donne
$$
E_V(u)=\iint_V|\nabla u|^2=\iint_U\big(|\nabla u|^2\circ\phi\big)\,|\phi'|^2=\iint_U|\nabla(u\circ\phi)|^2=E_U(u\circ\phi).
$$
L'énergie de Dirichlet est **invariante conforme**.

**C8.(a)** *Par C7.* $f_a$ est un biholomorphisme de $D$ sur $D$ ([[ch01-automorphismes-disque]], poly, Proposition I.13.3, p. 32), et $\Re(f_a)=u\circ f_a$ avec $u(w)=\Re(w)$, $|\nabla u|=1$. Donc $E(\Re(f_a))=E_D(u)=\iint_D1=\pi$.

*Par B5.* Si $a=0$, $f_0(z)=z$ et $E=\pi\cdot1=\pi$. Si $a\neq0$, pour $|z|<1/|a|$ (rayon $>1$),
$$
f_a(z)=(z-a)\sum_{m\ge0}\bar a^mz^m=-a+\sum_{n\ge1}\big(\bar a^{n-1}-a\bar a^n\big)z^n=-a+(1-|a|^2)\sum_{n\ge1}\bar a^{\,n-1}z^n .
$$
Donc, avec $t=|a|^2\in\,]0,1[$ et $\sum_{n\ge1}nt^{n-1}=\frac{1}{(1-t)^2}$,
$$
E(\Re(f_a))=\pi\sum_{n\ge1}n(1-|a|^2)^2|a|^{2(n-1)}=\pi(1-t)^2\cdot\frac{1}{(1-t)^2}=\pi .
$$
Les deux calculs concordent.

**C8.(b)** $F$ est holomorphe injective sur $U$, donc non constante sur chaque composante connexe de $U$ ; par le théorème de l'application ouverte (poly, Théorème I.14.1, p. 33), appliqué sur chaque composante connexe, $V=F(U)$ est ouvert, et $F:U\to V$ est une bijection holomorphe, donc un biholomorphisme (poly, Remarque I.14.3, p. 33). Par C7 avec $u=\Re$ sur $V$ (où $|\nabla u|=1$) : $E_U(\Re(F))=E_V(\Re)=\iint_V1=\mathrm{aire}(F(U))$. (Cohérent avec C8(a) : $f_a(D)=D$ a pour aire $\pi$.)

**C9.(a)** Sur $\C^*$, $T_\rho=\frac{1}{\ln\rho}\ln|w|$ est harmonique (fonction radiale de la forme $\alpha\ln|w|+\beta$ : [[ch04-harmoniques-radiales]], poly, section IV.4.2, p. 85). En polaires, $\tilde T_\rho(r,\theta)=\frac{\ln r}{\ln\rho}$, donc $|\nabla T_\rho|^2=\frac{1}{(\ln\rho)^2r^2}$ et
$$
E_{A_\rho}(T_\rho)=\int_\rho^1\int_0^{2\pi}\frac{1}{(\ln\rho)^2r^2}\,d\theta\,r\,dr=\frac{2\pi}{(\ln\rho)^2}\ln\frac1\rho=\frac{2\pi}{\ln(1/\rho)} .
$$

**C9.(b)** Soit $g=T_\sigma\circ\phi-T_\rho$ sur $A_\rho$. Comme $\phi$ est holomorphe à valeurs dans $A_\sigma\subset\C^*$, où $T_\sigma$ est harmonique, $T_\sigma\circ\phi$ est harmonique sur $A_\rho$ ([[ch04-composition-harmonique-holomorphe]], poly, section IV.4, p. 81-82), donc $g$ aussi. Par hypothèse, $T_\sigma(\phi(w))=\frac{\ln|\phi(w)|}{\ln\sigma}\to0$ quand $|w|\to1$ et $\to1$ quand $|w|\to\rho$ ; de même $T_\rho(w)\to0$, resp. $1$. Donc $g(w)\to0$ quand $w$ tend vers un point de $\partial A_\rho=C(0,1)\cup C(0,\rho)$, et $g$ se prolonge en une fonction continue sur le compact $\bar A_\rho$, nulle sur le bord.

Si $\max_{\bar A_\rho}g>0$, ce maximum est atteint en un point de $A_\rho$, qui est un maximum local de $g$ ; $A_\rho$ étant connexe, $g$ est constante sur $A_\rho$ ([[ch04-harmonique-moyenne-maximum]], poly, Corollaire IV.2.5, p. 77), égale à ce maximum $>0$, ce qui contredit $g\to0$ au bord. Donc $g\le0$ ; le même argument appliqué à $-g$ donne $g\ge0$. Ainsi $T_\sigma\circ\phi=T_\rho$.

Par C7 (avec $U=A_\rho$, $V=A_\sigma$, $u=T_\sigma$, de classe $C^1$ sur $A_\sigma$) puis C9(a) :
$$
\frac{2\pi}{\ln(1/\rho)}=E_{A_\rho}(T_\rho)=E_{A_\rho}(T_\sigma\circ\phi)=E_{A_\sigma}(T_\sigma)=\frac{2\pi}{\ln(1/\sigma)},
$$
d'où $\ln(1/\rho)=\ln(1/\sigma)$ et $\rho=\sigma$ : **deux couronnes centrées de rapports de rayons différents ne sont pas conformément équivalentes** (au moins par un biholomorphisme qui respecte les bords comme ci-dessus).

## Pièges et variantes

* A1 : ne pas oublier de vérifier que le candidat $h\mapsto2B(u,h)$ est **continu** pour la norme choisie ; c'est là que sert le terme $\sup|\nabla u|$ de la norme (avec la seule norme $\sup|u|$, $E$ ne serait même pas continue).
* A2 : la fonction bosse doit être dans $X_0$, donc **de classe $C^1$** et **nulle sur le cercle** ; $(r^2-|z-p|^2)$ sans le carré n'est pas $C^1$ au bord de $D(p,r)$. C'est le même argument que le lemme de du Bois-Reymond du calcul des variations ([[ch08-du-bois-reymond]]).
* A3 : $v$ est seulement $C^1$ ; on ne peut pas lui appliquer Green, mais on n'en a pas besoin : Green est appliqué à $u$ (de classe $C^2$) et à $h=v-u\in X_0$.
* C7 : l'invariance concerne l'**énergie** (intégrale de $|\nabla u|^2$), pas l'intégrale de $|\nabla u|$ ni celle de $u$ : $\iint_Uu\circ\phi\neq\iint_Vu$ en général, le jacobien $|\phi'|^2$ ne se compense qu'avec le facteur $|\phi'|^2$ venu du gradient. C'est propre à la dimension $2$.
* C9(b) : l'hypothèse sur le comportement de $|\phi|$ au bord est en fait automatique quitte à remplacer $\phi$ par $\sigma/\phi$ (un biholomorphisme envoie le voisinage d'un bord sur le voisinage d'un bord), mais ce n'est pas demandé. Variante (théorème de Schottky) : on peut aller plus loin et montrer que $\phi(w)=e^{i\theta}w$ ; indication : $T_\sigma\circ\phi=T_\rho$ donne $\ln|\phi|=\ln|w|$, donc $\phi(w)/w$ est holomorphe de module $1$, donc constante.
* Variante : sur le disque, le principe de Dirichlet dit que, parmi les $v$ de bord $\cos(k\theta)$, l'énergie minimale est $\pi k$ ; plus généralement, pour une donnée au bord $\sum_n(\alpha_n\cos n\theta+\beta_n\sin n\theta)$, l'énergie minimale est $\pi\sum_nn(\alpha_n^2+\beta_n^2)$ (appliquer B5 à $F=\sum_n(\alpha_n-i\beta_n)z^n$).
