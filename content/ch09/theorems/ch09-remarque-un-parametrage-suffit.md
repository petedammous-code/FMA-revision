---
id: ch09-remarque-un-parametrage-suffit
type: proposition
chapter: 9
title: Un seul paramétrage local suffit pour tester la différentiabilité
ref: Remarque IX.7.2
page: 159
importance: 2
depends: [ch09-changement-parametrage, ch09-fonction-differentiable-sur-sous-variete-def, ch05-composition-differentielles, ch09-ex-ouvert-de-sous-variete]
tags: [sous-variete, fonction-differentiable, parametrage-local, changement-de-parametrage, methode]
---
## Intuition

> 💡 La définition de « $f$ différentiable sur $S$ » ([[ch09-fonction-differentiable-sur-sous-variete-def]]) exige que $f$ lue dans **toutes** les cartes soit différentiable. En pratique, on n'en regarde qu'**une**, la plus commode : passer d'une carte à une autre revient à composer par un difféomorphisme ([[ch09-changement-parametrage]]), et composer par un difféomorphisme ne détruit pas la différentiabilité.

Formule à retenir : si $x$ et $y$ sont deux paramétrages, $f\circ y=(f\circ x)\circ\theta$ avec $\theta=x^{-1}\circ y$ de classe $C^k$. C'est **la** manière de vérifier en exercice qu'une fonction sur une sous-variété est $C^r$.

## Énoncé

**Proposition (poly, Remarque IX.7.2, p. 159).** Soit $S$ une sous-variété de dimension $m$ et de classe $C^k$ de $\R^N$, $f:S\to\R$ et $p\in S$.

1. Pour que $f$ soit différentiable en $p$, il suffit que $f\circ x:U\to\R$ soit différentiable en $q=x^{-1}(p)$ pour **un** paramétrage local $x$ de $S$ en $p$.
2. Si $r\le k$, pour que $f$ soit de classe $C^r$ dans un voisinage de $p$, il suffit que $f\circ x:U\to\R$ soit de classe $C^r$ pour **un** paramétrage local $x:U\to S$ de $S$ en $p$. Précisément : $f$ est alors de classe $C^r$ sur l'ouvert $x(U)$ de $S$ (qui est une sous-variété, [[ch09-ex-ouvert-de-sous-variete]]) ; et pour tout paramétrage $y:U'\to S$, $f\circ y$ est $C^r$ sur l'ouvert $y^{-1}(x(U))$.

**Conséquence.** $f$ est de classe $C^r$ sur $S$ ($r\le k$) si et seulement si tout point $p\in S$ admet un paramétrage local $x_p$ en $p$ tel que $f\circ x_p$ soit $C^r$.

## Hypothèses

### H1 — $x$ est un vrai paramétrage local (immersion, homéomorphisme)

**Rôle.** C'est ce qui permet d'appliquer [[ch09-changement-parametrage]] : $\theta=x^{-1}\circ y$ est un $C^k$-difféomorphisme.

**Si on la retire.** $S=\R$, $x(t)=t^3$ (homéomorphisme $C^\infty$, non immersif en $0$) et $f(s)=s^{1/3}$ : $f\circ x(t)=t$ est $C^\infty$, mais avec le paramétrage $\mathrm{id}_\R$, $f\circ\mathrm{id}=f$ n'est pas dérivable en $0$. Donc $f$ n'est pas différentiable en $0$.

### H2 — $r\le k$

**Rôle.** $f\circ y=(f\circ x)\circ\theta$ est $C^r$ dès que $f\circ x$ est $C^r$ et $\theta$ est $C^k$ avec $k\ge r$.

**Si on la retire.** $S=\mathrm{Graphe}(t\mapsto t|t|)$ est une sous-variété $C^1$ ; pour $f(X,Y)=X$, on a $f\circ x_1(t)=t$ ($C^\infty$) avec $x_1(t)=(t,t|t|)$, mais $f\circ x_2(s)=s+s|s|$ n'est pas $C^2$ avec le paramétrage $x_2=x_1\circ\theta$, $\theta(s)=s+s|s|$ (voir [[ch09-fonction-differentiable-sur-sous-variete-def]], H1). Un seul paramétrage ne suffit pas pour décider « $C^2$ ».

### H3 — la conclusion du point 2 est locale

**Rôle.** Un paramétrage $x$ ne voit que l'ouvert $x(U)$ de $S$.

**Si on la retire.** On ne peut pas conclure sur tout $S$ avec un seul paramétrage local. Sur $\mathbb S^1$, soit $f(X,Y)=|Y|$. Avec $x(t)=(\cos t,\sin t)$, $t\in]0,\pi[$ (paramétrage du demi-cercle supérieur), $f\circ x(t)=\sin t$ est $C^\infty$ : $f$ est $C^\infty$ sur $x(U)=\mathbb S^1\cap\{Y>0\}$. Mais $f$ n'est pas différentiable en $(1,0)$ : avec $y(t)=(\cos t,\sin t)$, $t\in]-\pi,\pi[$, $f\circ y(t)=|\sin t|$ n'est pas dérivable en $0$.

## Idée de la preuve

Pour un autre paramétrage $y$, on écrit $f\circ y=(f\circ x)\circ\theta$ près de $y^{-1}(p)$, avec $\theta=x^{-1}\circ y$ un $C^k$-difféomorphisme ([[ch09-changement-parametrage]]) ; la règle de la chaîne conclut.

## Preuve

**Point 1.** Soit $x:U\to S$ un paramétrage en $p$ tel que $f\circ x$ soit différentiable en $q=x^{-1}(p)$, et soit $y:U'\to S$ un paramétrage quelconque avec $p\in y(U')$ ; posons $q'=y^{-1}(p)$. Soit $W=x(U)\cap y(U')$, ouvert de $S$ contenant $p$. D'après [[ch09-changement-parametrage]],
$$
\theta=x^{-1}\circ y:\ y^{-1}(W)\to x^{-1}(W)
$$
est un $C^k$-difféomorphisme entre ouverts de $\R^m$, avec $\theta(q')=q$. Sur l'ouvert $y^{-1}(W)$, qui contient $q'$, on a
$$
f\circ y=(f\circ x)\circ(x^{-1}\circ y)=(f\circ x)\circ\theta.
$$
$\theta$ est différentiable en $q'$ et $f\circ x$ est différentiable en $\theta(q')=q$ (la restriction de $f\circ x$ à l'ouvert $x^{-1}(W)\ni q$ l'est encore). Par la règle de la chaîne ([[ch05-composition-differentielles]]), $f\circ y$ est différentiable en $q'$ : la différentiabilité en un point ne dépend que des valeurs au voisinage de ce point, et $y^{-1}(W)$ est un voisinage ouvert de $q'$ dans $U'$. Ceci valant pour tout $y$, $f$ est différentiable en $p$.

**Point 2.** Supposons $r\le k$ et $f\circ x$ de classe $C^r$ sur $U$. Soit $y:U'\to S$ un paramétrage quelconque et $W=x(U)\cap y(U')$. Comme ci-dessus, sur l'ouvert $y^{-1}(W)=y^{-1}(x(U))$, on a $f\circ y=(f\circ x)\circ\theta$, composée d'une application $C^r$ et d'une application $C^k$ avec $k\ge r$ : elle est $C^r$. Si $y$ est un paramétrage de la sous-variété $x(U)$ (i.e. $y(U')\subset x(U)$), alors $y^{-1}(x(U))=U'$ et $f\circ y$ est $C^r$ sur $U'$ tout entier : $f$ est $C^r$ sur $x(U)$.

**Conséquence.** Si chaque $p$ a un tel $x_p$, soit $y:U'\to S$ un paramétrage quelconque. Tout $q'\in U'$ appartient à l'ouvert $y^{-1}(x_p(U_p))$ pour $p=y(q')$, sur lequel $f\circ y$ est $C^r$ par le point 2. Être $C^r$ étant une propriété locale, $f\circ y$ est $C^r$ sur $U'$, donc $f$ est $C^r$ sur $S$. La réciproque est la définition. $\square$

## Preuve à trous

Soit $x$ un paramétrage en $p$ avec $f\circ x$ différentiable en $q=x^{-1}(p)$, et $y$ un autre paramétrage en $p$, $q'=y^{-1}(p)$. Sur l'ouvert $y^{-1}(W)$, $W=x(U)\cap y(U')$, on écrit <trou indice="insérer x∘x^{-1}">$f\circ y=(f\circ x)\circ\theta$ avec $\theta=x^{-1}\circ y$</trou>, et $\theta$ est <trou indice="quelle proposition du § IX.6 ?">un $C^k$-difféomorphisme de $y^{-1}(W)$ sur $x^{-1}(W)$ (changement de paramétrage), avec $\theta(q')=q$</trou>. Par <trou>la règle de la chaîne, $f\circ y$ est différentiable en $q'$</trou>.

Pour la classe $C^r$ : $f\circ y=(f\circ x)\circ\theta$ est $C^r$ sur $y^{-1}(x(U))$ car <trou indice="quelle hypothèse sur r ?">$f\circ x$ est $C^r$ et $\theta$ est $C^k$ avec $r\le k$</trou>. $\square$

## Exemples

* **Fonction angle.** Sur $S=\mathbb S^1\setminus\{(-1,0)\}$, la fonction $f$ définie par $f(\cos t,\sin t)=t$, $t\in]-\pi,\pi[$, vérifie $f\circ x=\mathrm{id}$ pour le paramétrage $x(t)=(\cos t,\sin t)$, qui est un paramétrage de $S$ en chacun de ses points : $f$ est $C^\infty$ sur $S$. Vérification avec un autre paramétrage : $y(u)=(\sqrt{1-u^2},u)$, $u\in]-1,1[$, donne $f\circ y(u)=\arcsin u$, bien $C^\infty$ ; ici $\theta=x^{-1}\circ y=\arcsin$.
* **Coordonnées sphériques.** Sur $\mathbb S^2$, la longitude $\lambda$ définie sur l'ouvert $\Omega=\mathbb S^2\setminus\{(X,0,Z) : X\le0\}$ par $\lambda(\cos\theta\cos\varphi,\sin\theta\cos\varphi,\sin\varphi)=\theta$, $(\theta,\varphi)\in]-\pi,\pi[\times]-\frac\pi2,\frac\pi2[$ : avec ce paramétrage $x$ (qui est un homéomorphisme sur $\Omega$, immersif car $\norm{\partial_\theta x\wedge\partial_\varphi x}=\cos\varphi\neq0$), $\lambda\circ x(\theta,\varphi)=\theta$ est $C^\infty$, donc $\lambda$ est $C^\infty$ sur $\Omega$. Aucune formule de prolongement à $\R^3$ n'est nécessaire.
* **Méthode en exercice.** Pour montrer que $\varphi:S\to\R$ est $C^\infty$, on exhibe en chaque point un paramétrage dans lequel l'expression est visiblement $C^\infty$ (souvent un graphe, [[ch09-sous-variete-localement-graphe]]), et on invoque cette remarque.

## Pièges

* > ⚠️ « Un paramétrage suffit » vaut pour un paramétrage **en $p$** (dont l'image contient $p$), et la conclusion du point 2 ne porte que sur un **voisinage** de $p$ ($x(U)$). Pour tout $S$, il faut un paramétrage en chaque point.
* > ⚠️ Le paramétrage doit être un vrai paramétrage (immersif) : $t\mapsto t^3$ ne convient pas (H1).
* La condition $r\le k$ est essentielle (H2) ; pour $S$ lisse ($k=\infty$), elle est automatique.
* L'argument est toujours le même : **composer par le changement de paramétrage**. On le réutilise pour les applications entre sous-variétés ([[ch09-remarques-applications-cr]], point 1).
