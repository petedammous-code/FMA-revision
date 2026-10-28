---
id: ex-ch06-noyau-integral-sinus
type: exercise
chapters: [6, 5]
title: Une équation intégrale non linéaire et sa dépendance en les données
source: Inventé
difficulty: 3
time: 45
tools: [ch06-point-fixe-parametre-cp, ch06-neumann-inverse-id-moins-l, ch05-differentielle-def, ch05-composition-differentielles, ch05-differentielle-bilineaire, ch05-taylor-lagrange-1d, ch05-norme-operateur-def]
---
## Énoncé

On note $E=C^0([0,1],\R)$, muni de la norme $\norm u=\sup_{t\in[0,1]}|u(t)|$, qui en fait un espace de Banach. Soit $K:[0,1]^2\to\R$ une fonction continue non identiquement nulle, et
$$
\kappa=\max_{t\in[0,1]}\int_0^1|K(t,s)|\,ds .
$$
Pour $\lambda\in\R$ et $f\in E$, on considère l'équation, d'inconnue $u\in E$,
$$
(\mathcal E_{\lambda,f})\qquad u(t)=f(t)+\lambda\int_0^1K(t,s)\,\sin\big(u(s)\big)\,ds\qquad(t\in[0,1]).
$$

1. Pour $v\in E$, on pose $(Tv)(t)=\displaystyle\int_0^1K(t,s)\,v(s)\,ds$. Montrer que $\kappa$ est bien défini et $>0$, que $Tv\in E$, et que $T$ est une application linéaire continue de $E$ dans $E$ avec $\norm T\le\kappa$.
2. On pose $N(u)=\sin\circ u$ pour $u\in E$. Montrer que $N:E\to E$ est de classe $C^1$, avec $dN_u(h)=(\cos\circ u)\,h$ et $\norm{dN_u}\le1$.
3. Soit $\Lambda=\,]-1/\kappa,1/\kappa[\,\times E$. Montrer que pour tout $(\lambda,f)\in\Lambda$, l'équation $(\mathcal E_{\lambda,f})$ admet une unique solution $u=\Phi(\lambda,f)\in E$, et que $\Phi:\Lambda\to E$ est de classe $C^1$. Exprimer $d\Phi_{(\lambda,f)}(\mu,k)$ pour $(\mu,k)\in\R\times E$.
4. Soit $f\in E$. Montrer que $\Phi(\lambda,f)=f+\lambda\,T(\sin\circ f)+o(\lambda)$ dans $E$ quand $\lambda\to0$. Expliciter ce développement pour $K(t,s)=ts$ et $f(t)=\pi t/2$.
5. Dans cette question, $K(t,s)=ts$ et $f=0$. Montrer que les solutions de $(\mathcal E_{\lambda,0})$ sont exactement les fonctions $u(t)=ct$, où $c\in\R$ vérifie $c=\lambda\,m(c)$ avec $m(c)=\displaystyle\int_0^1s\sin(cs)\,ds$. En déduire que, pour $\lambda>3$, l'équation $(\mathcal E_{\lambda,0})$ a au moins trois solutions. Comparer avec la question 3.

## Indices

### Indice 1
L'équation a la forme $u=g(\lambda,f,u)$, et l'on veut à la fois l'existence, l'unicité et la régularité de la solution en fonction des **paramètres** $(\lambda,f)$. Un théorème du cours fait exactement cela, à condition d'une contraction uniforme en la variable $u$.

### Indice 2
Théorème du point fixe à paramètre, version $C^p$ ([[ch06-point-fixe-parametre-cp]]), avec $g(\lambda,f,u)=f+\lambda\,T(N(u))$, $X=E$ (fermé convexe) et $\frac{\partial g}{\partial u}=\lambda\,T\circ dN_u$, de norme $\le|\lambda|\kappa$. Attention : la constante $a$ doit être **uniforme** sur l'ouvert des paramètres. Travailler sur $\Lambda_a=\,]-a/\kappa,a/\kappa[\,\times E$ pour $a<1$ fixé, puis recoller.

### Indice 3
Pour la différentiabilité de $N$ : $|\sin(\alpha+\beta)-\sin\alpha-\beta\cos\alpha|\le\beta^2/2$ (Taylor–Lagrange) et $|\cos\alpha-\cos\beta|\le|\alpha-\beta|$. Pour la question 5 : $m(c)\ge\frac c3-\frac{c^3}{30}$ si $c>0$, et $|m(c)|\le\frac12$.

## Corrigé

**1.** *$\kappa$ est bien défini.* $K$ est continue sur le compact $[0,1]^2$, donc uniformément continue (Heine). Soit $\omega(\delta)=\sup\{|K(t,s)-K(t',s)| : s\in[0,1],\ |t-t'|\le\delta\}$ ; on a $\omega(\delta)\to0$ quand $\delta\to0$. Alors $\big|\int_0^1|K(t,s)|ds-\int_0^1|K(t',s)|ds\big|\le\omega(|t-t'|)$, donc $t\mapsto\int_0^1|K(t,s)|ds$ est continue sur le compact $[0,1]$ et atteint son maximum $\kappa$. Comme $K$ est continue et non identiquement nulle, il existe $t_0$ tel que $s\mapsto|K(t_0,s)|$ soit continue, positive, non nulle, donc d'intégrale $>0$ : $\kappa>0$.

*$T$ est bien à valeurs dans $E$ et continue.* Pour $v\in E$ et $t,t'\in[0,1]$, $|(Tv)(t)-(Tv)(t')|\le\norm v\,\omega(|t-t'|)$, donc $Tv$ est continue. $T$ est évidemment linéaire, et $|(Tv)(t)|\le\int_0^1|K(t,s)|\,|v(s)|\,ds\le\kappa\norm v$. Donc $T\in\mathcal L(E)$ et $\norm T\le\kappa$ ([[ch05-norme-operateur-def]]).

**2.** Soient $u,h\in E$. Pour $\alpha,\beta\in\R$, l'inégalité de Taylor–Lagrange à l'ordre 2 ([[ch05-taylor-lagrange-1d]]), appliquée à $\tau\mapsto\sin(\alpha+\tau\beta)$ dont la dérivée seconde est majorée par $\beta^2$, donne $|\sin(\alpha+\beta)-\sin\alpha-\beta\cos\alpha|\le\beta^2/2$. Avec $\alpha=u(s)$, $\beta=h(s)$ et le sup sur $s$ :
$$
\norm{N(u+h)-N(u)-(\cos\circ u)\,h}\le\tfrac12\norm h^2=o(\norm h).
$$
L'application $L_u:h\mapsto(\cos\circ u)\,h$ envoie $E$ dans $E$ (produit de fonctions continues). Elle est linéaire et $\norm{L_uh}\le\norm h$, donc $L_u\in\mathcal L(E)$ et $\norm{L_u}\le1$. Ainsi $N$ est différentiable en $u$ et $dN_u=L_u$ ([[ch05-differentielle-def]]). Enfin, comme $|\cos\alpha-\cos\beta|\le|\alpha-\beta|$,
$$
\norm{dN_u-dN_v}_{\mathcal L(E)}=\sup_{\norm h\le1}\norm{(\cos\circ u-\cos\circ v)\,h}\le\norm{\cos\circ u-\cos\circ v}\le\norm{u-v},
$$
donc $u\mapsto dN_u$ est continue (et même $1$-lipschitzienne) : $N$ est de classe $C^1$.

**3.** L'équation $(\mathcal E_{\lambda,f})$ s'écrit $u=g(\lambda,f,u)$ avec
$$
g:\R\times E\times E\to E,\qquad g(\lambda,f,u)=f+\lambda\,T\big(N(u)\big).
$$
*Régularité de $g$.* L'application $(\lambda,f,u)\mapsto(\lambda,f,N(u))$ est $C^1$ (composantes $C^1$, question 2). L'application $(\lambda,w)\mapsto\lambda w$ est bilinéaire continue de $\R\times E$ dans $E$, donc $C^1$ ([[ch05-differentielle-bilineaire]]). $T$ est linéaire continue et l'addition aussi. Par composition ([[ch05-composition-differentielles]]), $g$ est de classe $C^1$, avec
$$
\frac{\partial g}{\partial u}(\lambda,f,u)=\lambda\,T\circ dN_u,\qquad \frac{\partial g}{\partial(\lambda,f)}(\lambda,f,u)(\mu,k)=k+\mu\,T\big(N(u)\big).
$$
*Contraction uniforme.* Fixons $a\in\,]0,1[$ et $\Lambda_a=\,]-a/\kappa,a/\kappa[\,\times E$, ouvert de l'espace de Banach $\R\times E$. Pour $(\lambda,f)\in\Lambda_a$ et $u\in E$,
$$
\Big\|\frac{\partial g}{\partial u}(\lambda,f,u)\Big\|\le|\lambda|\,\norm T\,\norm{dN_u}\le\frac a\kappa\cdot\kappa\cdot1=a .
$$
*Application du théorème.* Hypothèses du théorème du point fixe à paramètre II ([[ch06-point-fixe-parametre-cp]], poly Théorème VI.1.4, p. 117) :
* $\Lambda_a$ est un ouvert d'un Banach ;
* $X=E$ est un fermé convexe du Banach $E$ ;
* $g:\Lambda_a\times X\to X$ est de classe $C^1$ ;
* $\norm{\partial g/\partial u}\le a<1$ sur $\Lambda_a\times X$.

Donc pour tout $(\lambda,f)\in\Lambda_a$, $u\mapsto g(\lambda,f,u)$ a un unique point fixe $\Phi(\lambda,f)$, et $\Phi$ est $C^1$ sur $\Lambda_a$.

*Recollement.* $\Lambda=\bigcup_{0<a<1}\Lambda_a$. Le point fixe $\Phi(\lambda,f)$ ne dépend pas de $a$ (il est unique dans $E$). Être $C^1$ est une propriété locale, et chaque point de $\Lambda$ a un voisinage ouvert $\Lambda_a$ sur lequel $\Phi$ est $C^1$. Donc $\Phi$ est $C^1$ sur $\Lambda$, et $(\mathcal E_{\lambda,f})$ a une unique solution pour $|\lambda|<1/\kappa$.

*Différentielle.* Le théorème donne, avec $u=\Phi(\lambda,f)$,
$$
d\Phi_{(\lambda,f)}(\mu,k)=\Big(\id_E-\lambda\,T\circ dN_u\Big)^{-1}\Big(k+\mu\,T(\sin\circ u)\Big).
$$
L'inverse existe et est de norme $\le(1-|\lambda|\kappa)^{-1}$ par la série de Neumann ([[ch06-neumann-inverse-id-moins-l]]). Autrement dit, $w=d\Phi_{(\lambda,f)}(\mu,k)$ est l'unique solution dans $E$ de l'équation intégrale **linéaire** $w(t)=k(t)+\mu\int_0^1K(t,s)\sin u(s)\,ds+\lambda\int_0^1K(t,s)\cos\big(u(s)\big)\,w(s)\,ds$.

**4.** Pour $\lambda=0$, $g(0,f,u)=f$ pour tout $u$, donc $\Phi(0,f)=f$. La différentiabilité de $\Phi$ au point $(0,f)$, appliquée à l'accroissement $(\lambda,0)$, donne
$$
\Phi(\lambda,f)=\Phi(0,f)+d\Phi_{(0,f)}(\lambda,0)+o(\lambda)=f+\lambda\,T(\sin\circ f)+o(\lambda),
$$
puisque $d\Phi_{(0,f)}(\mu,0)=(\id_E-0)^{-1}\big(\mu\,T(\sin\circ f)\big)$.

*Exemple.* Pour $K(t,s)=ts$, on a $\kappa=\max_t t\int_0^1s\,ds=\tfrac12$ et $\Lambda=\,]-2,2[\,\times E$. Pour $f(t)=\pi t/2$, $T(\sin\circ f)(t)=t\displaystyle\int_0^1s\sin\frac{\pi s}2\,ds$. Par intégration par parties,
$$
\int_0^1s\sin\frac{\pi s}2\,ds=\Big[-\frac2\pi s\cos\frac{\pi s}2\Big]_0^1+\frac2\pi\int_0^1\cos\frac{\pi s}2\,ds=0+\frac4{\pi^2}\Big[\sin\frac{\pi s}{2}\Big]_0^1=\frac4{\pi^2}.
$$
D'où $\sup_{t\in[0,1]}\Big|u_\lambda(t)-\dfrac{\pi t}2-\dfrac{4\lambda}{\pi^2}\,t\Big|=o(\lambda)$, où $u_\lambda=\Phi(\lambda,f)$. Valeur numérique : $4/\pi^2\approx0{,}405$.

**5.** Soit $u$ une solution de $(\mathcal E_{\lambda,0})$ avec $K(t,s)=ts$. Alors $u(t)=t\cdot\lambda\int_0^1s\sin u(s)\,ds=ct$, où $c=\lambda\int_0^1s\sin u(s)\,ds$ est une constante. En reportant $u(s)=cs$ dans la définition de $c$, on obtient $c=\lambda m(c)$. Réciproquement, si $c=\lambda m(c)$, alors $u(t)=ct$ vérifie $\lambda t\int_0^1s\sin(cs)\,ds=\lambda m(c)\,t=ct=u(t)$ : c'est une solution. Les solutions sont donc les $ct$ avec $c=\lambda m(c)$, et deux valeurs distinctes de $c$ donnent deux solutions distinctes.

Soit $\lambda>3$ et $\chi(c)=c-\lambda m(c)$, continue sur $\R$ et impaire, car $m$ l'est.
* Pour $c>0$, comme $\sin x\ge x-x^3/6$ pour $x\ge0$, on a $m(c)\ge\int_0^1s\big(cs-\tfrac{c^3s^3}6\big)ds=\frac c3-\frac{c^3}{30}$. Donc $\chi(c)\le c\big(1-\frac\lambda3\big)+\frac{\lambda c^3}{30}$, qui est $<0$ pour $c>0$ assez petit, puisque $1-\lambda/3<0$.
* Comme $|m(c)|\le\int_0^1s\,ds=\frac12$, on a $\chi(c)\ge c-\frac\lambda2>0$ pour $c>\lambda/2$.

Par le théorème des valeurs intermédiaires, il existe $c_*>0$ tel que $\chi(c_*)=0$. Par imparité $\chi(-c_*)=0$, et $\chi(0)=0$. Les trois fonctions $0$, $c_*t$ et $-c_*t$ sont des solutions distinctes.

*Comparaison.* Ici $\kappa=\frac12$ : la question 3 garantit l'unicité (la solution est alors $u=0$) pour $|\lambda|<2$, et l'on vient de voir que l'unicité est fausse pour $\lambda>3$. La condition $|\lambda|\kappa<1$ est **suffisante**, pas nécessaire. En fait, pour $c\neq0$, $|\sin(cs)|<|c|s$ pour $s\in\,]0,1]$, donc $|m(c)|<|c|/3$. Pour $|\lambda|\le3$, l'équation $c=\lambda m(c)$ n'a donc que la solution $c=0$ : le seuil exact pour ce noyau est $3$.

## Pièges et variantes

* > ⚠️ Le théorème [[ch06-point-fixe-parametre-cp]] exige une constante de contraction $a<1$ **uniforme** sur tout l'ouvert des paramètres. Sur $]-1/\kappa,1/\kappa[$ entier, la meilleure constante vaut $\sup|\lambda|\kappa=1$ : il faut travailler sur $\Lambda_a$ puis recoller (régularité locale, unicité globale).
* Différentiabilité de $N=\sin\circ\,\cdot$ dans $C^0$ : il ne suffit pas de « dériver sous le sinus ». Il faut un reste uniforme en $s$, ici Taylor–Lagrange avec $|\sin''|\le1$, et la continuité de $u\mapsto dN_u$ **en norme d'opérateur**.
* Le seuil $2$ obtenu pour $K(t,s)=ts$ vient de la norme sup : $\norm T=\frac12$. Avec la norme $L^2$, $T$ est l'opérateur de rang un $v\mapsto\langle v,s\rangle\,t$, de norme $\int_0^1s^2ds=\frac13$, et un argument de contraction dans $L^2$ donnerait le seuil optimal $3$. Choisir une norme adaptée est un vrai savoir-faire.
* Variante : remplacer $\sin$ par une fonction $\phi$ de classe $C^2$, à dérivée bornée par $L$ et dérivée seconde bornée. Tout fonctionne pour $|\lambda|\kappa L<1$ (pour la continuité de $u\mapsto dN_u$, utiliser $\phi''$ bornée).
* Variante : obtenir le même résultat local, près de $(0,f_0)$, par le théorème des fonctions implicites appliqué à $F(\lambda,f,u)=u-f-\lambda T(N(u))$, puisque $\partial_uF(0,f_0,u_0)=\id_E$. On n'obtient alors qu'un voisinage de $\lambda=0$, alors que le point fixe donne tout l'intervalle $|\lambda|<1/\kappa$ et l'unicité dans $E$ entier.
