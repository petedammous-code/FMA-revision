---
id: ex-ch06-equation-integrale-diffeo
type: exercise
chapters: [6, 5]
title: Un difféomorphisme global de l'espace des fonctions continues
source: "Inventé (opérateur intégral non linéaire de type Volterra ; l'idée « une itérée est contractante » est celle de l'Exercice VI.4.1 du poly)"
difficulty: 3
time: 45
tools: [ch06-inversion-globale, ch06-point-fixe-iteree-contractante, ch06-diffeomorphisme-def, ch05-differentielle-def, ch05-taylor-lagrange-1d, ch05-composition-differentielles, ch05-differentielle-lineaire, ch05-lef-banach-norme-algebre, ch05-banach-series-absolument-convergentes]
---
## Énoncé

Soit $E=C^0([0,1],\R)$ muni de la norme $\norm u_\infty=\sup_{t\in[0,1]}|u(t)|$ ; c'est un espace de Banach. On définit $\Phi:E\to E$ par
$$
\Phi(u)(t)=u(t)+\int_0^t\sin\big(u(s)\big)\,ds\qquad(u\in E,\ t\in[0,1]).
$$

1. Montrer que $\Phi$ est de classe $C^1$ et que, pour $u,h\in E$,
$$
d\Phi_u(h)(t)=h(t)+\int_0^t\cos\big(u(s)\big)\,h(s)\,ds .
$$
Calculer la norme d'opérateur de $d\Phi_0-\id_E$.
2. Soit $a\in E$ telle que $\norm a_\infty\le1$, et $K_a\in\mathcal L(E)$ définie par $K_ah(t)=\int_0^ta(s)h(s)\,ds$. Montrer que $|K_a^mh(t)|\le\dfrac{t^m}{m!}\norm h_\infty$ pour tous $m\in\N$, $h\in E$, $t\in[0,1]$. En déduire que $\id_E+K_a$ est un isomorphisme bicontinu de $E$ sur $E$.
3. Soit $w\in E$. Montrer que l'équation $\Phi(u)=w$ admet une unique solution $u\in E$.
4. En déduire que $\Phi$ est un $C^1$-difféomorphisme de $E$ sur $E$.
5. On note $\mathbf c$ la fonction constante égale à $c\in\R$. Déterminer $\Phi^{-1}(\boldsymbol\pi)$ et $d(\Phi^{-1})_{\boldsymbol\pi}(\mathbf 1)$, puis $d(\Phi^{-1})_{\mathbf 0}(\mathbf 1)$. Interpréter à l'aide d'une équation différentielle vérifiée par $\Phi^{-1}(w)$ lorsque $w$ est de classe $C^1$.

## Indices

### Indice 1
Pour la différentiabilité, écrire $\Phi=\id+V\circ N$ avec $N(u)=\sin\circ u$ et $V$ l'opérateur de primitivation, et traiter $N$ à la main par une inégalité de Taylor en chaque point $t$. Pour inverser : il faut une différentielle inversible partout **et** l'injectivité — mais attention, rien n'est de norme $<1$ ici.

### Indice 2
Taylor–Lagrange : $|\sin(y+k)-\sin y-k\cos y|\le\frac{k^2}2$. Question 2 : récurrence sur $m$, puis la série $\sum_m(-K_a)^m$ converge absolument dans l'espace de Banach $\mathcal L(E)$. Question 3 : $\Phi(u)=w\iff u=T_w(u)$ avec $T_w(u)=w-V(\sin\circ u)$ ; estimer $|T_wu(t)-T_wv(t)|$ en fonction de $\int_0^t|u-v|$, puis itérer.

### Indice 3
Question 3 : on obtient $\norm{T_w^mu-T_w^mv}_\infty\le\frac1{m!}\norm{u-v}_\infty$, donc $T_w^2$ est contractante : utiliser le résultat « une itérée contractante suffit ». Question 4 : théorème d'inversion globale, avec la question 2 appliquée à $a=\cos\circ u$. Question 5 : $d(\Phi^{-1})_{\Phi(u)}=(d\Phi_u)^{-1}$ ; résoudre $h(t)-\int_0^th=1$ en dérivant.

## Corrigé

**1.** *L'opérateur $V$.* Soit $V:E\to E$, $Vw(t)=\int_0^tw(s)\,ds$ ($Vw$ est continue, même $C^1$). $V$ est linéaire et $|Vw(t)|\le t\norm w_\infty\le\norm w_\infty$, donc $V\in\mathcal L(E)$, $\norm V\le1$ ; il est donc différentiable de différentielle $V$ en tout point ([[ch05-differentielle-lineaire]]).

*L'opérateur $N(u)=\sin\circ u$.* Pour $u\in E$, notons $M_u\in\mathcal L(E)$ la multiplication $M_uh=(\cos\circ u)\,h$, de norme $\le1$. Pour $u,h\in E$ et $t\in[0,1]$, l'inégalité de Taylor–Lagrange à l'ordre $2$ pour $\sin$ ([[ch05-taylor-lagrange-1d]] ; $|\sin''|\le1$) donne
$$
\big|\sin(u(t)+h(t))-\sin u(t)-\cos(u(t))\,h(t)\big|\le\tfrac12h(t)^2\le\tfrac12\norm h_\infty^2 ,
$$
donc $\norm{N(u+h)-N(u)-M_uh}_\infty\le\frac12\norm h_\infty^2=o(\norm h_\infty)$ : $N$ est différentiable en $u$, $dN_u=M_u$ ([[ch05-differentielle-def]]). De plus $\norm{M_u-M_v}\le\norm{\cos\circ u-\cos\circ v}_\infty\le\norm{u-v}_\infty$ ($\cos$ est $1$-lipschitzienne) : $u\mapsto dN_u$ est continue, $N$ est de classe $C^1$.

*Conclusion.* $\Phi=\id_E+V\circ N$ est $C^1$ et, par la règle de la chaîne ([[ch05-composition-differentielles]]), $d\Phi_u=\id_E+V\circ M_u$, ce qui est la formule annoncée. En $u=0$ : $d\Phi_0-\id_E=V$, et $\norm V=1$ : on a vu $\norm V\le1$, et pour $h=\mathbf 1$, $\norm{V\mathbf 1}_\infty=\sup_t t=1=\norm{\mathbf 1}_\infty$. Donc **la série de Neumann ne s'applique pas directement** à $d\Phi_0=\id+V$ (il faudrait $\norm V<1$).

**2.** *Récurrence.* Pour $m=0$, $|h(t)|\le\norm h_\infty$. Si l'inégalité est vraie au rang $m$, alors, comme $|a|\le1$,
$$
|K_a^{m+1}h(t)|=\Big|\int_0^ta(s)\,K_a^mh(s)\,ds\Big|\le\int_0^t\frac{s^m}{m!}\norm h_\infty\,ds=\frac{t^{m+1}}{(m+1)!}\norm h_\infty .
$$
D'où $\norm{K_a^m}\le\frac1{m!}$ pour tout $m$.

*Inversibilité.* $\mathcal L(E)$ est un espace de Banach muni d'une norme d'algèbre ([[ch05-lef-banach-norme-algebre]]), et $\sum_m\norm{(-K_a)^m}\le\sum_m\frac1{m!}=e<\infty$ : la série $S=\sum_{m\ge0}(-K_a)^m$ converge absolument, donc converge dans $\mathcal L(E)$ ([[ch05-banach-series-absolument-convergentes]]). La composition étant continue,
$$
(\id+K_a)\circ S=\sum_{m\ge0}(-K_a)^m-\sum_{m\ge0}(-K_a)^{m+1}=\id ,
$$
et de même $S\circ(\id+K_a)=\id$ (série télescopique, de terme général $(-K_a)^m\to0$). Donc $\id+K_a$ est bijectif, d'inverse $S$ continu : c'est un isomorphisme bicontinu. (Le point clé : ce n'est pas $\norm{K_a}$ qui est $<1$, mais $\norm{K_a^m}$ qui décroît assez vite.)

**3.** Posons $T_w(u)=w-V(N(u))$, application de $E$ dans $E$. Alors $\Phi(u)=w\iff u=T_w(u)$. Pour $u,v\in E$, comme $\sin$ est $1$-lipschitzienne,
$$
|T_wu(t)-T_wv(t)|=\Big|\int_0^t\big(\sin u(s)-\sin v(s)\big)ds\Big|\le\int_0^t|u(s)-v(s)|\,ds .
$$
Par la même récurrence qu'en 2, $|T_w^mu(t)-T_w^mv(t)|\le\frac{t^m}{m!}\norm{u-v}_\infty$ : si c'est vrai au rang $m$ pour tous $u,v$ et tout $t$, alors $|T_w^{m+1}u(t)-T_w^{m+1}v(t)|\le\int_0^t|T_w^mu-T_w^mv|\le\frac{t^{m+1}}{(m+1)!}\norm{u-v}_\infty$. En particulier
$$
\norm{T_w^2u-T_w^2v}_\infty\le\tfrac12\norm{u-v}_\infty :
$$
$T_w^2$ est contractante sur l'espace métrique complet $E$. D'après la variante du théorème de Picard ([[ch06-point-fixe-iteree-contractante]]), $T_w$ admet un unique point fixe. Ainsi $\Phi(u)=w$ a une unique solution : $\Phi$ est bijective.

(Remarque : $T_w$ elle-même n'est pas contractante pour $\norm\cdot_\infty$ : pour $u=\eta\mathbf 1$, $v=0$, $\norm{T_wu-T_wv}_\infty=\sin\eta$, et $\sin\eta/\eta\to1$.)

**4.** Vérifions les hypothèses du théorème d'inversion globale ([[ch06-inversion-globale]]) pour $\Phi:U=E\to E$ :
* $E$ est un espace de Banach réel, $U=E$ est ouvert ;
* $\Phi$ est de classe $C^1$ (question 1) ;
* $\Phi$ est injective (question 3) ;
* pour tout $u\in E$, $d\Phi_u=\id+V\circ M_u=\id+K_a$ avec $a=\cos\circ u\in E$, $\norm a_\infty\le1$ : c'est un isomorphisme bicontinu (question 2).

Donc $\Phi(E)$ est ouvert et $\Phi^{-1}:\Phi(E)\to E$ est de classe $C^1$. Comme $\Phi(E)=E$ (question 3), $\Phi$ est un $C^1$-difféomorphisme de $E$ sur $E$ ([[ch06-diffeomorphisme-def]]).

**5.** *Valeur.* $\Phi(\boldsymbol\pi)(t)=\pi+\int_0^t\sin\pi\,ds=\pi$, donc $\Phi^{-1}(\boldsymbol\pi)=\boldsymbol\pi$ ; de même $\Phi(\mathbf 0)=\mathbf 0$.

*Différentielles.* En dérivant $\Phi\circ\Phi^{-1}=\id$, $d(\Phi^{-1})_{\Phi(u)}=(d\Phi_u)^{-1}$. Pour $u=\boldsymbol\pi$, $\cos\pi=-1$ et l'on cherche $h\in E$ tel que
$$
h(t)-\int_0^th(s)\,ds=1\qquad(t\in[0,1]).
$$
Une telle $h$ est $C^1$ (car $h=1+Vh$), et en dérivant : $h'-h=0$, avec $h(0)=1$, donc $h(t)=e^t$. Réciproquement $e^t-\int_0^te^s\,ds=e^t-(e^t-1)=1$. Par unicité (question 2), $d(\Phi^{-1})_{\boldsymbol\pi}(\mathbf 1)=(t\mapsto e^t)$. De même pour $u=\mathbf 0$ ($\cos0=1$) : $h+\int_0^th=1$ donne $h'+h=0$, $h(0)=1$, d'où $d(\Phi^{-1})_{\mathbf 0}(\mathbf 1)=(t\mapsto e^{-t})$.

*Interprétation.* Si $w\in C^1([0,1])$ et $u=\Phi^{-1}(w)$, alors $u=w-V(\sin\circ u)$ est $C^1$ et
$$
u'(t)=w'(t)-\sin u(t),\qquad u(0)=w(0).
$$
Pour $w=\mathbf c$ constante, $u=\Phi^{-1}(\mathbf c)$ est donc la solution de $u'=-\sin u$, $u(0)=c$ (limite très amortie de l'équation du pendule). Les constantes $0$ et $\pi$ sont des équilibres. Le développement $\Phi^{-1}(\boldsymbol\pi+\eps\mathbf 1)=\boldsymbol\pi+\eps\,e^t+o(\eps)$ dit qu'une petite perturbation de l'équilibre $\pi$ est amplifiée comme $e^t$ (équilibre instable, linéarisé $v'=v$), alors que $\Phi^{-1}(\eps\mathbf 1)=\eps\,e^{-t}+o(\eps)$ : l'équilibre $0$ est attractif (linéarisé $v'=-v$). On retrouve l'équation linéarisée (équation aux variations) comme différentielle de l'application « donnée $\mapsto$ solution ».

## Pièges et variantes

* **Le piège central** : $\norm{d\Phi_u-\id}$ peut valoir $1$ (question 1) et $T_w$ n'est que $1$-lipschitzienne : ni la série de Neumann « brute », ni le point fixe de Banach « brut » ne s'appliquent. Ce sont les **itérées** ($\norm{K_a^m}\le1/m!$, $T_w^2$ contractante) qui sauvent la situation.
* Ne pas oublier, avant d'invoquer l'inversion globale, de vérifier que $d\Phi_u$ est un isomorphisme **bicontinu** en **tout** point $u$, pas seulement en $0$ : c'est pour cela que la question 2 est posée pour un $a$ quelconque de norme $\le1$.
* La différentiabilité de $N:u\mapsto\sin\circ u$ sur $C^0$ repose sur une majoration **uniforme en $t$** du reste de Taylor ; sur $L^2$ (ou avec un $\sin$ remplacé par une fonction à dérivée seconde non bornée) la question est plus délicate.
* Variante : munir $E$ de la norme équivalente $\norm u_L=\sup_te^{-Lt}|u(t)|$ (norme de Bielecki) ; on vérifie que $T_w$ devient $\frac1L$-contractante, ce qui donne une autre preuve de la question 3.
* Variante : remplacer $\sin$ par une fonction $f$ de classe $C^2$ à dérivées $f'$, $f''$ bornées ; tout reste vrai avec $\norm{K_a^m}\le\norm{f'}_\infty^m/m!$.
