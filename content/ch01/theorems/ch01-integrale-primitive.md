---
id: ch01-integrale-primitive
type: theorem
chapter: 1
title: "Si $f$ admet une primitive holomorphe $F$, $\int_\gamma f\,dz=F(\gamma(b))-F(\gamma(a))$ ; nulle sur tout lacet"
ref: Théorème I.5.9
page: 17
importance: 3
depends: [ch01-derivee-f-rond-gamma, ch01-def-integrale-chemin, ch01-integrale-reparametrage-oppose-concatenation, ch01-def-holomorphe, ch01-holomorphe-ssi-c1-et-dzbar-nul]
tags: [primitive, integrale-curviligne, lacet, theoreme-fondamental, independance-chemin]
---
## Intuition

> 💡 C'est le **théorème fondamental de l'analyse** ($\int_a^bF'(t)\,dt=F(b)-F(a)$) transporté le long d'un chemin du plan complexe. Si $f$ est la dérivée complexe d'une fonction holomorphe $F$, alors chaque petit terme $f(z)\,\Delta z\approx F'(z)\Delta z\approx\Delta F$ est un petit accroissement de $F$ ; en les sommant, tout se télescope et il ne reste que $F(\text{arrivée})-F(\text{départ})$.

Conséquences immédiates : l'intégrale **ne dépend pas du chemin** suivi entre deux points (seulement des extrémités), et elle est **nulle sur tout lacet**. Lu à l'envers, c'est un **test d'inexistence de primitive** : si $\int_\gamma f(z)\,dz\neq0$ sur un lacet $\gamma$ de $\Omega$, alors $f$ n'a pas de primitive holomorphe sur $\Omega$. Exemple phare : $\int_{C(0,1)}\frac{dz}{z}=2i\pi\neq0$, donc $\frac1z$ n'a pas de primitive holomorphe sur $\C^\times$ — il n'existe pas de logarithme holomorphe sur $\C^\times$.

Rappels : $F$ est **holomorphe** sur $\Omega$ ($F\in\Hol(\Omega)$) si elle est $\C$-dérivable en tout point avec $F'$ continue ([[ch01-def-holomorphe]]) ; chemins et lacets : [[ch01-def-chemin-lacet]] ; intégrale le long d'un chemin : [[ch01-def-integrale-chemin]].

## Énoncé

**Théorème (poly, Théorème I.5.9, p. 17).** Soit $f:\Omega\to\C$ continue et $\gamma:[a,b]\to\Omega$ un chemin de $\Omega$. On suppose que $f$ admet une **primitive holomorphe** $F$ sur $\Omega$, c'est-à-dire que $F\in\Hol(\Omega)$ et que $f=F'$. Alors
$$
\int_\gamma f(z)\,dz=F(\gamma(b))-F(\gamma(a)).
$$
En particulier, si $\gamma$ est un lacet, on a $\int_\gamma f(z)\,dz=0$.

## Hypothèses

### H1 — $f$ continue

**Rôle.** Rend $\int_\gamma f(z)\,dz$ défini ([[ch01-def-integrale-chemin]]).

**Si on la retire.** Rien ne change : c'est une conséquence des autres hypothèses, puisque $f=F'$ et que, pour $F\in\Hol(\Omega)$, $F'$ est continue par définition ([[ch01-def-holomorphe]]). L'hypothèse est redondante, écrite pour fixer le cadre.

### H2 — $F$ holomorphe sur **tout** $\Omega$ avec $F'=f$ sur $\Omega$

**Rôle.** C'est le cœur : elle donne $(F\circ\gamma)'(t)=F'(\gamma(t))\gamma'(t)=f(\gamma(t))\gamma'(t)$ en tout point du chemin, ce qui permet d'appliquer le théorème fondamental de l'analyse. Il faut que $F$ existe **le long de tout le chemin**, d'un seul tenant.

**Si on la retire.** $f(z)=\frac1z$ est holomorphe sur $\Omega=\C^\times$ et, sur le lacet $\gamma(t)=e^{it}$, $t\in[0,2\pi]$, $\int_\gamma\frac{dz}{z}=\int_0^{2\pi}\frac{ie^{it}}{e^{it}}\,dt=2i\pi\neq0$ ([[ch01-integrale-sur-cercle]]). Pourtant $\frac1z$ admet des primitives **locales** : sur tout disque de $\C^\times$ ([[ch01-primitive-locale]]), et par exemple la détermination principale du logarithme sur $\C\setminus\R_-$ ([[ch02-logarithme-determination-principale-def]]). Avoir des primitives sur des morceaux ne suffit pas. De même $f(z)=\bar z$ est continue sur $\C$ et $\int_{C(0,1)}\bar z\,dz=2i\pi\neq0$ : elle n'a de primitive holomorphe sur aucun ouvert contenant le cercle unité.

### H3 — $\gamma$ est un chemin **de $\Omega$** (image contenue dans $\Omega$)

**Rôle.** La formule évalue $F$ en tous les points $\gamma(t)$ : il faut qu'ils soient dans le domaine de $F$.

**Si on la retire.** Prenons $\Omega=\C\setminus\R_-$, $f(z)=\frac1z$, $F=\mathrm{Log}$ (détermination principale, $\mathrm{Log}(e^{i\theta})=i\theta$ pour $|\theta|<\pi$). Pour $0<\theta<\pi$, l'arc $\gamma_\theta(t)=e^{it}$, $t\in[-\theta,\theta]$, est dans $\Omega$, et le théorème donne $\int_{\gamma_\theta}\frac{dz}{z}=\mathrm{Log}(e^{i\theta})-\mathrm{Log}(e^{-i\theta})=2i\theta$ (ce que confirme le calcul direct $\int_{-\theta}^{\theta}i\,dt$). Mais le cercle entier, qui est un lacet passant par $-1\notin\Omega$, n'est pas un chemin de $\Omega$ : on ne peut pas conclure que l'intégrale est nulle, et de fait elle vaut $2i\pi$ (limite de $2i\theta$ quand $\theta\to\pi$).

## Idée de la preuve

Par la règle de dérivation le long d'un chemin ([[ch01-derivee-f-rond-gamma]]), $(F\circ\gamma)'(t)=F'(\gamma(t))\gamma'(t)$ : l'intégrande $f(\gamma(t))\gamma'(t)$ est la dérivée de $F\circ\gamma$. On intègre (théorème fondamental de l'analyse) sur chaque morceau $C^1$, puis la somme se télescope.

## Preuve

*Cas où $\gamma$ est de classe $C^1$ (poly).* Comme $F$ est holomorphe, elle est de classe $C^1$ au sens réel, avec $\frac{\partial F}{\partial\bar z}=0$ et $\frac{\partial F}{\partial z}=F'$ ([[ch01-holomorphe-ssi-c1-et-dzbar-nul]]). Le lemme de dérivation le long d'un chemin ([[ch01-derivee-f-rond-gamma]]) s'applique : $F\circ\gamma$ est de classe $C^1$ sur $[a,b]$ et
$$
(F\circ\gamma)'(t)=\frac{\partial F}{\partial z}(\gamma(t))\,\gamma'(t)+\frac{\partial F}{\partial\bar z}(\gamma(t))\,\overline{\gamma'(t)}=F'(\gamma(t))\,\gamma'(t).
$$
Donc, par le théorème fondamental de l'analyse (appliqué aux parties réelle et imaginaire de la fonction $C^1$ $F\circ\gamma$),
$$
\int_\gamma f(z)\,dz=\int_a^bf(\gamma(t))\,\gamma'(t)\,dt=\int_a^bF'(\gamma(t))\,\gamma'(t)\,dt=\int_a^b(F\circ\gamma)'(t)\,dt=F(\gamma(b))-F(\gamma(a)).
$$

*Cas général : $\gamma$ de classe $C^1$ par morceaux.* Le poly indique qu'il se traite en décomposant $\gamma$ en chemins de classe $C^1$ ; détaillons. Soit $a=t_0<\dots<t_n=b$ une subdivision adaptée à $\gamma$ et $\gamma_k$ la restriction de $\gamma$ à $[t_{k-1},t_k]$. Chaque $\gamma_k$ est continue sur $[t_{k-1},t_k]$, $C^1$ sur l'intérieur, et $\gamma'$ y a des limites aux deux bouts ; par le théorème de la limite de la dérivée (appliqué à $\Re\gamma_k$ et $\Im\gamma_k$), $\gamma_k$ est de classe $C^1$ sur le segment fermé $[t_{k-1},t_k]$. Le chemin $\gamma$ est le composé $\gamma_1\vee\dots\vee\gamma_n$ (ici sans décalage de temps, puisque chaque $\gamma_{k+1}$ commence à l'instant $t_k$ où finit $\gamma_k$), donc par l'additivité ([[ch01-integrale-reparametrage-oppose-concatenation]], point (iii) — ou directement par la relation de Chasles sur $[a,b]$) et le cas $C^1$ appliqué à chaque $\gamma_k$ :
$$
\int_\gamma f(z)\,dz=\sum_{k=1}^n\int_{\gamma_k}f(z)\,dz=\sum_{k=1}^n\bigl(F(\gamma(t_k))-F(\gamma(t_{k-1}))\bigr)=F(\gamma(t_n))-F(\gamma(t_0))=F(\gamma(b))-F(\gamma(a)),
$$
la somme étant télescopique.

*Lacets.* Si $\gamma$ est un lacet, $\gamma(b)=\gamma(a)$, donc $\int_\gamma f(z)\,dz=F(\gamma(a))-F(\gamma(a))=0$. $\square$

## Preuve à trous

*Cas $\gamma$ de classe $C^1$.* Comme $F$ est holomorphe, elle est $C^1$ avec $\frac{\partial F}{\partial\bar z}=0$, et le lemme de dérivation le long d'un chemin donne
$$
(F\circ\gamma)'(t)=\ ?
$$
à savoir <trou indice="règle de la chaîne avec ∂/∂z et ∂/∂z̄">$(F\circ\gamma)'(t)=F'(\gamma(t))\gamma'(t)=f(\gamma(t))\gamma'(t)$</trou>. Donc
$$
\int_\gamma f(z)\,dz=\int_a^b(F\circ\gamma)'(t)\,dt=F(\gamma(b))-F(\gamma(a))
$$
par <trou>le théorème fondamental de l'analyse, appliqué aux parties réelle et imaginaire de la fonction $C^1$ $F\circ\gamma$</trou>.

*Cas $C^1$ par morceaux.* Avec une subdivision $(t_k)$ adaptée et $\gamma_k=\gamma|_{[t_{k-1},t_k]}$ (de classe $C^1$ sur le segment fermé), <trou indice="additivité de l'intégrale, puis cas C¹ sur chaque morceau, puis...">$\int_\gamma f(z)\,dz=\sum_k\bigl(F(\gamma(t_k))-F(\gamma(t_{k-1}))\bigr)$, somme télescopique égale à $F(\gamma(b))-F(\gamma(a))$</trou>.

*Lacets.* Si $\gamma(a)=\gamma(b)$, l'intégrale vaut $0$. $\square$

## Exemples

* **Polynômes et exponentielle : intégrales sans paramétrer.** Pour $n\ge0$, $z^n$ a pour primitive holomorphe $\frac{z^{n+1}}{n+1}$ sur $\C$ ; pour $n\le-2$, $z^n$ a pour primitive $\frac{z^{n+1}}{n+1}$ sur $\C^\times$. Donc pour **tout** chemin $\gamma$ (de $\C^\times$ si $n\le-2$) de $z_1$ à $z_2$ : $\int_\gamma z^n\,dz=\frac{z_2^{n+1}-z_1^{n+1}}{n+1}$, et $\int_{C(z_0,r)}(z-z_0)^n\,dz=0$ pour $n\neq-1$ (on retrouve [[ch01-integrale-sur-cercle]] sans calcul). De même $\int_\gamma e^z\,dz=e^{z_2}-e^{z_1}$.
* **Deux demi-cercles de $1$ à $-1$.** Soient $\gamma_+(t)=e^{it}$ et $\gamma_-(t)=e^{-it}$, $t\in[0,\pi]$ (par le haut et par le bas). Pour $f(z)=z^2$ (primitive $z^3/3$) : les deux intégrales valent $\frac{(-1)^3-1^3}{3}=-\frac23$ ; vérification directe : $\int_{\gamma_+}z^2\,dz=i\int_0^\pi e^{3it}\,dt=i\Bigl[\frac{e^{3it}}{3i}\Bigr]_0^\pi=\frac{e^{3i\pi}-1}{3}=-\frac23$. Pour $f(z)=\frac1z$ : $\int_{\gamma_+}\frac{dz}{z}=\int_0^\pi i\,dt=i\pi$ et $\int_{\gamma_-}\frac{dz}{z}=\int_0^\pi(-i)\,dt=-i\pi$ : **différentes**, ce qui reprouve que $\frac1z$ n'a pas de primitive holomorphe sur $\C^\times$ (la différence $2i\pi$ est l'intégrale sur le lacet $\gamma_+\vee\gamma_-^{opp}$, le cercle unité).
* **Test d'inexistence.** Pour $f(z)=\frac{1}{z^2+1}$ sur $\Omega=\C\setminus\{i,-i\}$ : sa décomposition $\frac1{z^2+1}=\frac{1}{2i}\Bigl(\frac1{z-i}-\frac1{z+i}\Bigr)$ et le calcul de [[ch01-integrale-sur-cercle]] donnent $\int_{C(i,1)}\frac{dz}{z^2+1}=\frac{1}{2i}(2i\pi-0)=\pi\neq0$ (le terme $\frac1{z+i}$ a la primitive... locale seulement, mais il est holomorphe sur un disque contenant $\bar D(i,1)$ — on admet ici que son intégrale est nulle, ce que donnera le théorème de Cauchy). Donc $\frac1{z^2+1}$ n'a pas de primitive holomorphe sur $\C\setminus\{\pm i\}$ (alors que $\arctan$ en est une sur la bande $|\Re z|$ quelconque, $|\Im z|<1$).

## Pièges

* > ⚠️ La primitive doit être holomorphe sur un ouvert contenant **tout le chemin** : des primitives locales (qui existent toujours pour $f$ holomorphe, [[ch01-primitive-locale]]) ne suffisent pas. C'est exactement la différence entre $\C^\times$ (pas de primitive globale de $1/z$) et un ouvert simplement connexe (primitive globale : [[ch02-primitive-simplement-connexe]]).
* La réciproque « $\int_\gamma f=0$ sur un lacet particulier $\Rightarrow$ primitive » est fausse ; c'est la nullité sur **tous** les lacets de $\Omega$ qui caractérise l'existence d'une primitive (chapitre II). Exemple : $\int_{C(0,1)}\frac{dz}{z^2}=0$ et $\frac1{z^2}$ a bien une primitive ($-\frac1z$), mais $\int_{C(0,2)}\frac{dz}{z(z-3)}=\ -\frac{2i\pi}{3}\neq0$... pour vérifier une non-existence il suffit d'**un** lacet où l'intégrale est non nulle.
* Ne pas appliquer le théorème avec une « primitive » non holomorphe : par exemple $\frac{|z|^2}{1}$ n'est pas une primitive de $\bar z$ au sens complexe ($\bar z$ n'a aucune primitive holomorphe : $\int_{C(0,1)}\bar z\,dz=2i\pi$).
* Le théorème ne dit **rien** de $\int_\gamma f$ quand $f$ est seulement holomorphe sans primitive connue : pour la nullité sur un lacet, il faudra le théorème de Cauchy (invariance par homotopie, [[ch02-invariance-homotopie-integrale]], [[ch02-cauchy-simplement-connexe]]).
